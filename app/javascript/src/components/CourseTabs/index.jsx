import React from 'react'
import { Box, Tabs, Tab } from '@mui/material'
import { useCourseData } from '../../hooks/useCourse'

const CourseTabs = () => {
  const [value, setValue] = React.useState(0)
  const { getCourses } = useCourseData()

  const handleChange = async (event, newValue) => {
    setValue(newValue)
    if(newValue === 1) 
      getCourses({collectives: true})

    if(newValue === 2) 
      getCourses({individuals: true})

    if(newValue === 3)
      getCourses({me: true})
    
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
        <Tab label="Tous" {...a11yProps(0)} />
        <Tab label="Collectives" {...a11yProps(1)} />
        <Tab label="Individuelles" {...a11yProps(2)} />
        <Tab label="Mes sessions" {...a11yProps(3)} />
      </Tabs>
    </Box>
  )
}

export default CourseTabs