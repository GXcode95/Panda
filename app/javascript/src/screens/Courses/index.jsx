import React, { useEffect, useLayoutEffect, useState } from "react"
import Research from "../../components/CourseResearch"
import CourseCard from '../../components/CourseCard'
import axios from "axios"
const Courses = () => {
  const [courses,setCourses] = useState()
  const [themes,setThemes] = useState()
  const [structures,setStructures] = useState()
  const [initiations,setInitiations] = useState()

  const [sortedCourses, setSortedCourses] = useState()
  const [selectedTheme, setSelectedTheme] = useState(null)
  const [selectedStructure, setSelectedStructure] = useState(null)

  const findCourseStructure = (course) => {
    return structures.find(obj => { 
      return obj.id === course.structure_id
    })
  }

  const findCourseInitiation = (course) => {
    return initiations.find(obj => { 
      return obj.id === course.initiation_id
    })
  }

  const findCourseTheme = (course) => {
    return themes.find(obj => { 
      return obj.id === course.theme_id
    })
  }

  useLayoutEffect(()=> {
    const getSessions = async () => {
      try {
        const structuresResponse = await axios.get('/api/v1/structures.json')
        setStructures(structuresResponse.data)

        const initiationsResponse = await axios.get('/api/v1/initiations.json')
        setInitiations(initiationsResponse.data)

        const themesResponse = await axios.get('/api/v1/themes.json')
        setThemes(themesResponse.data)

        console.log("Structures ==>", structuresResponse)
        const coursesResponse = await axios.get('/api/v1/courses.json')

        setSortedCourses(coursesResponse.data.courses)
        setCourses(coursesResponse.data.courses)
      } catch (error){
        console.log(error.message)
      }
    }
    getSessions()
  }, [])

  useEffect(()=> {
    if (selectedTheme) {
      setSortedCourses(courses.filter(course =>
        course.theme_id === selectedTheme.id
      ))
      setSelectedStructure(null)
    } 
  }, [selectedTheme])

  useEffect(()=> {
    if (selectedStructure) {
      setSortedCourses(courses.filter(course =>
        course.structure_id === selectedStructure.id
      ))
      setSelectedTheme(null)
    }
  },[selectedStructure])

  return (
    <>
    { courses && 
    <div className='container'>
      <h1> Courses </h1>
      <Research 
        themes={{
          list: themes, 
          set: setSelectedTheme, 
          selected: selectedTheme?.id
        }}
        structures={{
          list: structures,
          set: setSelectedStructure,
          selected: selectedStructure?.id
        }}
        initiations={initiations}
      />
      <div className='courses-wrapper' >

      {sortedCourses.map(course => 
          <CourseCard
            key={course.id}
            course={course}
            structure={findCourseStructure(course)}
            initiation={findCourseInitiation(course)}
            theme={findCourseTheme(course)}
          />
      )}
      </div>

    </div>
    }
    </>
  );
}

export default Courses
