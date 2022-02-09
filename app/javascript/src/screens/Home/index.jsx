import React from 'react';
import axios from 'axios'
import Courses from '../../components/Courses';
const Home = () => {

  const handleClick = async () => {
    const  data  = await axios.get('/api/v1/courses.json')
    console.log("data:" , data)
  }

  return (
    <div>
      <h1>Home</h1>
      <Courses />
    </div>
  )
};

export default Home;
