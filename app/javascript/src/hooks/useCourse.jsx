import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Cookies from 'js-cookie'

export const CourseDataContext = createContext()

export const ProvideCourseData = ({ children }) => {
  const courseData = useProvideCourseData()
  return <CourseDataContext.Provider value={courseData}>{children}</CourseDataContext.Provider>
}
export const useCourseData = () => {
  return useContext(CourseDataContext)
}


const useProvideCourseData = () => {
  const [courses, setCourses] = useState()
  const [themes, setThemes] = useState()
  const [structures, setStructures] = useState()
  const [initiations, setInitiations] = useState()
  const [themeQueries, setThemeQueries] = useState([])

  const getThemes = async () => {
    const themesResponse = await axios.get('/api/v1/themes.json')
    setThemes(themesResponse.data)
  }

  const getCourses = async (params={}) => {
    if (themeQueries.length > 0)
      params.themes = themeQueries

    const coursesResponse = await axios.get('/api/v1/courses.json', { params } )
    console.log("Courses request => ", coursesResponse.data)
    setCourses(coursesResponse.data.courses)
  }

  const getStructures = async () => {
    const structuresResponse = await axios.get('/api/v1/structures.json')
    setStructures(structuresResponse.data)
  }

  const getInitiations = async () => {
    const initiationsResponse = await axios.get('/api/v1/initiations.json')
    setInitiations(initiationsResponse.data)
  }

  const getOneCourse = async (id) => {
    const response = await axios.get(`/api/v1/courses/${id}.json`)
    return response.data.course
  }

  const subscribe = async (courseId) => {
    try {
      const {data} = await axios.post('/api/v1/subscriptions.json', {
        subscription: {
          course_id: courseId
        }
      })
      if(data.error){
        alert(data.error)
      } else {
        alert(data.message)
        return getOneCourse(courseId)
      }
    } catch (error) {
      errorMessage(error, "Inscription impossible, veuillez réesayer dans quelques minutes.")
    }
  }

  const unsubscribe = async (courseId) => {
    try {
      const {data} = await axios.delete(`/api/v1/subscriptions/${courseId}.json`)
      if(data.error){
        alert(data.error)
      } else {
        alert(data.message)
        return getOneCourse(courseId)
      }
    } catch (error) {
      errorMessage(error, "Inscription impossible, veuillez réesayer dans quelques minutes.")
    }
  }

  const handleThemesQueries = (themeId) => {
    let tmpQueries = []
    if (themeQueries.includes(themeId)) {
      tmpQueries = themeQueries.filter(id => id != themeId)
    } else {
      tmpQueries = [...themeQueries, themeId]
    }
    console.log("queries theme id:", tmpQueries)
    setThemeQueries(tmpQueries)
  }

  useEffect(()=> {
    getCourses()
  }, [themeQueries])

  useEffect(()=> {
    getThemes()
    getStructures()
    getInitiations()
  }, [])

  return {
    courses,
    themes,
    structures,
    initiations,
    getCourses,
    getOneCourse,
    getThemes,
    getStructures,
    getInitiations,
    unsubscribe,
    subscribe,
    handleThemesQueries
  }
}

