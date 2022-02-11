import React from 'react'
import { Box, Tabs, Tab } from '@mui/material'
import { useCourseData } from '../../hooks/useCourse'

const CourseTabs = () => {
  const [value, setValue] = React.useState(0)
  const { getCourses } = useCourseData()

  const handleChange = async (event, newValue) => {
    setValue(newValue)
    if(newValue === 0) 
      getCourses({collective: true})

    if(newValue === 1) 
      getCourses({collective: false})

    if(newValue === 2)
      getCourses({userCourses: true})
    
  }

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
        <Tab label="Collectif" {...a11yProps(0)} />
        <Tab label="Individuel" {...a11yProps(1)} />
        <Tab label="Mes sessions" {...a11yProps(2)} />
      </Tabs>
    </Box>
  )
}

export default CourseTabs