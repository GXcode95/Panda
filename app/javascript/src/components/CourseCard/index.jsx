import React, { useEffect, useState } from 'react'
import { Box, Button, Typography, Tooltip } from '@mui/material'
import { useAuth } from '../../hooks/useAuth'

import { useCourseData } from '../../hooks/useCourse'



const CourseCard = ({courseId, theme, structure, initiation}) => {
  const { user} = useAuth()
  const [course, setCourse] = useState()
  const { getOneCourse, subscribe, unsubscribe} = useCourseData()

  const isSubscribed = () => {
    return course.subscribers.includes(user.id)
  }

  const handleSubcribe = async () => {
    const courseUpdate = await subscribe(courseId)
    if (courseUpdate)
      setCourse(courseUpdate)
  }

  const handleUnsubscribe = async () => {
     const courseUpdate = await unsubscribe(courseId)
    if (courseUpdate)
      setCourse(courseUpdate)
  }
  
  useEffect(()=> {
    const handleGetOneCourse = async () =>  {
      setCourse( await getOneCourse(courseId))
    }
    handleGetOneCourse()
  }, [])
  

  return course ? (
    <Box className="CourseCard"  bgcolor={theme.color}>
      <Box className="title" bgcolor={theme.color}>
        <Typography 
          align="center" 
          fontSize="22px"
          color="white"
          padding="0.3rem 0.5rem"
        >
          {initiation.name}
        </Typography>
      </Box>
      <div className="body" 
        style={{borderColor: theme.color}}>
        <Typography align="center" fontSize="16px" color="white">
          {course.date_in_letter}, 
          <Tooltip title={<h3>{structure.address}</h3>}>
            <span className="bold"> {structure.name} </span>
          </Tooltip>
        </Typography>

        <Box className="footer" gap={1}>
          <Button 
            variant="contained"
            sx={{bgcolor: "white", color: '#242424'}}
            onClick={isSubscribed(course) ? handleUnsubscribe  : handleSubcribe}
            >
            {isSubscribed(course) ? "Annuler" : "S'inscrire"}
          </Button>
          
          <Typography align="center" fontSize="20px" px={1} color="white"> 
            {course.subscribers.length} / {course.max_subscriptions} places
          </Typography>
      </Box>
      </div>
    </Box>
  ) : <div></div>
}

export default CourseCard