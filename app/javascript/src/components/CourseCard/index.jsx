import React from 'react'
import { Box, Button, Typography, Tooltip } from '@mui/material'
import axios from 'axios'
import { useAuth } from '../../hooks/useAuth'


const errorMessage = (error, defaultMessage) => {
  const noResponseFromServer = "Une erreur est survenue, veuillez réessayer dans quelques minutes."

  if(error.response)
    error.response.data ? alert(error.response.data.error) : alert(defaultMessage)
  else
    alert(noResponseFromServer)
}
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
  const { isSubscribed, subscriptions, getSubscriptions } = useAuth()

  const handleSub = async () => {
    try {
      const {data} = await axios.post('/api/v1/subscriptions.json', {
        subscription: {
          course_id: course.id
        }
      })
      if(data.error){
        alert(data.error)
      } else {
        alert(data.message)
        getSubscriptions()
      }
    } catch (error) {
      errorMessage(error, "Inscription impossible, veuillez réesayer dans quelques minutes.")
    }
      
  }

  const handleUnsub = async () => {
    try {
      const subscriptionId = subscriptions.find(sub => sub.course_id === course.id).id
      const {data} = await axios.delete(`/api/v1/subscriptions/${subscriptionId}.json`)
      if(data.error){
        alert(data.error)
      } else {
        alert(data.message)
        getSubscriptions()
      }
    } catch (error) {
      errorMessage(error, "Une erreur est survenue")
    }
      
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
        <Button 
          variant="contained"
          sx={{bgcolor: theme.color}}
          onClick={isSubscribed(course) ? handleUnsub : handleSub}
          >
          {isSubscribed(course) ? "Annuler" : "S'inscrire"}
        </Button>
        <Typography align="center" fontSize="20px" px={1} color="white"> 
          0 / {course.max_subscriptions} places
        </Typography>
      </Box>
    </Box>
  )
}

export default CourseCard