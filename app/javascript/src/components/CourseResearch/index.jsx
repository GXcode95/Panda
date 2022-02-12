import React from 'react'
import { useCourseData } from '../../hooks/useCourse'

const Research = () => {
  const { 
    handleThemesQueries,
    handleStructureQueries,
    handleInitiationQueries,
  } = useCourseData()


  // const removePandaFromName = (name) => {
  //   let shortName = name.split(' ')
  //   shortName.shift()
  //   return shortName.join(' ')
  // }
  
  const handleClickTheme = (id) => {
    handleThemesQueries(id)
  }

  const handleClickStructure = (id) => {
    handleStructureQueries(id)
  }

  const handleClickInitiation = (id) => {
    handleInitiationQueries(id)
  }


  return (
    <div className="Research">
      <button onClick={e => handleClickTheme(1)}> theme1 </button>
      <button onClick={e => handleClickTheme(2)}> theme2 </button>
      <button onClick={e => handleClickTheme(4)}> theme4 </button>
      
      <button onClick={e => handleClickStructure(1)}> structure1 </button>
      <button onClick={e => handleClickStructure(2)}> structure2 </button>
      <button onClick={e => handleClickStructure(8)}> structure8 </button>

      <button onClick={e => handleClickInitiation(1)}> Initiation1 </button>
      <button onClick={e => handleClickInitiation(2)}> Initiation2 </button>
      <button onClick={e => handleClickInitiation(70)}> Initiation70 </button>
    </div>
  )
}
export default Research