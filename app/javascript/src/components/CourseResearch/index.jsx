import React from 'react'
import { Box, Chip } from '@mui/material'


const Research = ({themes, structures, courses}) => {
  
  const removePandaFromName = (name) => {
    let shortName = name.split(' ')
    shortName.shift()
    return shortName.join(' ')
  }

  const isSelectedStructure = (structure) => {
    return structure.id === structures.selected
  }

  const isSelectedTheme = (theme) => {
    return theme.id === themes.selected
  }
  
  return (
    <div className="Research">
      <p className="title">
        Themes
      </p>
      <Box className="chips-wrapper" >
        {themes.list.map(theme => 
          <div 
            className={`chip ${isSelectedTheme(theme) && "active" }`}
            key={theme.id}
            style={{ backgroundColor: theme.color}}
            onClick={e=>themes.set(theme)}
          >{theme.name}</div>
        )}
      </Box>

      <p className="title">
        Structures
      </p>
      <Box className="chips-wrapper" >
        {structures.list.map(structure => 
          <div 
            className={`chip ${ isSelectedStructure(structure) && "active" }`}
            key={structure.id}
            style={{ backgroundColor: 'cyan'}}
            onClick={e=> structures.set(structure)}
          >{removePandaFromName(structure.name)}</div>
        )}
      </Box>
    </div>
  )
}
export default Research