import React, { useEffect, useLayoutEffect, useState } from "react"
import Research from "../../components/CourseResearch"
import CourseCard from '../../components/CourseCard'
import axios from "axios"
import { useCourseData } from "../../hooks/useCourse"

const Courses = () => {
  const {courses, themes, structures, initiations} = useCourseData()
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
 
  return (
    <>
    { courses && 
    <div className='container'>
      <h1> Courses </h1>
     <div className='courses-wrapper' >

      {courses.map(course => 
          <CourseCard
            key={course.id}
            courseId={course.id}
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
