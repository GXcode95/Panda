import React, { useEffect, useState } from 'react'
import { Box, Button, Typography, Tooltip } from '@mui/material'
import axios from 'axios'
import { useAuth } from '../../hooks/useAuth'

import { useCourseData } from '../../hooks/useCourse'
const errorMessage = (error, defaultMessage) => {
  const noResponseFromServer = "Une erreur est survenue, veuillez réessayer dans quelques minutes."

  if(error.response)
    error.response.data ? alert(error.response.data.error) : alert(defaultMessage)
  else
    alert(noResponseFromServer)
}

const CourseCard = ({courseId, theme, structure, initiation}) => {
  const { user} = useAuth()
  const [course, setCourse] = useState()
  const { getOneCourse, subscribe, unsubscribe} = useCourseData()

  const isSubscribed = () => {
    return course.subscribers.includes(user.id)
  }

  const handleSub = async () => {
    // try {
    //   const {data} = await axios.post('/api/v1/subscriptions.json', {
    //     subscription: {
    //       course_id: course.id
    //     }
    //   })
    //   if(data.error){
    //     alert(data.error)
    //   } else {
    //     alert(data.message)
    //     console.log(data)
    //     getCourseInfo()
    //   }
    // } catch (error) {
    //   errorMessage(error, "Inscription impossible, veuillez réesayer dans quelques minutes.")
    // }

    const courseUpdate = await subscribe(courseId)
    if (courseUpdate)
      setCourse(courseUpdate)
      
  }

  const handleUnsub = async () => {
    // try {
    //   const subscriptionId = subscriptions.find(sub => sub.course_id === course.id).id
    //   const {data} = await axios.delete(`/api/v1/subscriptions/${courseId}.json`)
    //   if(data.error){
    //     alert(data.error)
    //   } else {
    //     alert(data.message)
    //     getCourseInfo()

    //   }
    // } catch (error) {
    //   errorMessage(error, "Une erreur est survenue")
    // }
    const courseUpdate = await unsubscribe(courseId)
    if (courseUpdate)
      setCourse(courseUpdate)
  }
  
  const getCourseInfo = async () =>  {
    setCourse( await getOneCourse(courseId))
  }
  useEffect(()=> {
    getCourseInfo()
  }, [])
  

  return course ? (
    <Box className="CourseCard" borderColor={theme.color} bgcolor={theme.color}>
      <Box className="title" bgcolor={theme.color} borderColor={theme.color}  p={1}>
        <div className="overlay"/>
        <Typography align="center" fontSize="22px" color="white">
          {initiation.name}
        </Typography>
      </Box>

      <Typography align="center" fontSize="22px" color="white" py={0.3} px={0.6}>
        {course.date_in_letter}, 
        <Tooltip title={<h3>{structure.address}</h3>}>
          <span className="bold"> {structure.name} </span>
        </Tooltip>
      </Typography>

      <Box className="footer" gap={1}>
        <Button 
          variant="contained"
          sx={{bgcolor: theme.color}}
          onClick={isSubscribed(course) ? handleUnsub : handleSub}
          >
          {isSubscribed(course) ? "Annuler" : "S'inscrire"}
        </Button>
        <Typography align="center" fontSize="20px" px={1} color="white"> 
          {course.subscribers.length} / {course.max_subscriptions} places
        </Typography>
      </Box>
    </Box>
  ) : <div></div>
}

export default CourseCard