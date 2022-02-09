import React from 'react'
import { Box, Button, Typography, Tooltip } from '@mui/material'
import axios from 'axios'


const parseDate = (strDate) => {
  const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
  
  // the server give a string date so with create a JS Date object
  const date = new Date(strDate)
  // get the month name  
  const month = months[date.getMonth() - 1]
  // get the day number
  const day = date.getDate()

  return `Le ${day} ${month}`
}

const CourseCard = ({course, theme, structure, initiation}) => {
  const logs = () => {
      console.log("course:", course)
      console.log("theme", theme)
      console.log("structure", structure)
      console.log("initiation",initiation)
  }

  const handleSub = async () => {
    const res = await axios.post('/api/v1/subscriptions', {
      subscription: {
        course_id: 68
      }
    })
    console.log("response",res)
  }


  return (

      <Box className="CourseCard" borderColor={theme.color} bgcolor={theme.color}>
        <Box className="title" bgcolor={theme.color} borderColor={theme.color}  p={1}>
          <div className="overlay"/>
          <Typography align="center" fontSize="22px" color="white">
            {initiation.name}
          </Typography>
        </Box>
        <Typography align="center" fontSize="22px" color="white" py={0.3} px={0.6}>
          {parseDate(course.date)}, 
          <Tooltip title={<h3>{structure.address}</h3>}>
            <span className="bold"> au {structure.name} </span>
          </Tooltip>
        </Typography>

        <Box className="footer" gap={1}>
          <Button variant="contained"  sx={{bgcolor: theme.color}}  onClick={handleSub}>
            S'inscrire
          </Button>
          <Typography align="center" fontSize="20px" px={1} color="white"> 
            0 / {course.max_subscriptions} places
          </Typography>
        </Box>
        {/* {logs()} */}
      </Box>
  )
}

export default CourseCard