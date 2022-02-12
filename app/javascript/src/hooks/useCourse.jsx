import React, { 
  createContext,
  useContext,
  useEffect,
  useState } from 'react'
import axios from 'axios'

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
  const [structureQueries, setStructureQueries] = useState([])
  const [initiationQueries, setInitiationQueries] = useState([])

  const getCourses = async (params={}) => {
    if (themeQueries.length > 0)
      params.themes = themeQueries
    if (structureQueries.length > 0)
      params.structures = structureQueries
    if (initiationQueries.length > 0)  
      params.initiations = initiationQueries

    const coursesResponse = await axios.get('/api/v1/courses.json', { params } )
    setCourses(coursesResponse.data.courses)
  }
  const getThemes = async () => {
    const themesResponse = await axios.get('/api/v1/themes.json')
    setThemes(themesResponse.data)
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
    setThemeQueries(tmpQueries)
  }
  const handleStructureQueries = (structureId) => {
    let tmpQueries = []
    if (structureQueries.includes(structureId)) {
      tmpQueries = structureQueries.filter(id => id != structureId)
    } else {
      tmpQueries = [...structureQueries, structureId]
    }
    setStructureQueries(tmpQueries)
  }
  const handleInitiationQueries = (initiationId) => {
    let tmpQueries = []
    if (initiationQueries.includes(initiationId)) {
      tmpQueries = initiationQueries.filter(id => id != initiationId)
    } else {
      tmpQueries = [...initiationQueries, initiationId]
    }
    setInitiationQueries(tmpQueries)
  }

  useEffect(()=> {
    getCourses()
  }, [themeQueries, structureQueries, initiationQueries])

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
    unsubscribe,
    subscribe,
    handleThemesQueries,
    handleStructureQueries,
    handleInitiationQueries
  }
}

