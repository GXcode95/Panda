import React from 'react'
import { Box, Chip } from '@mui/material'
import { useCourseData } from '../../hooks/useCourse'

const Research = () => {
  const { handleThemesQueries } = useCourseData()


  // const removePandaFromName = (name) => {
  //   let shortName = name.split(' ')
  //   shortName.shift()
  //   return shortName.join(' ')
  // }
  
  const handleClick = (id) => {
    handleThemesQueries(id)
  }

  return (
    <div className="Research">
      <button onClick={e =>handleClick(1)}> theme1 </button>
      <button onClick={e =>handleClick(2)}> theme2 </button>
      <button onClick={e =>handleClick(3)}> theme3 </button>
    </div>
  )
}
export default Research