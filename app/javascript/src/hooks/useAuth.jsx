import React, { createContext, useContext, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Cookies from 'js-cookie'

export const AuthContext = createContext()

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(AuthContext)
}

// Provider hook that creates auth object and handles state
const useProvideAuth = ()  => {
  const [user, setUser] = useState(null);
  const [subscriptions, setSubscriptions] = useState(null);
  const navigate = useNavigate()
  
  const errorMessage = (error, defaultMessage) => {
    const noResponseFromServer = "Une erreur est survenue, veuillez réessayer dans quelques minutes."
  
    if(error.response)
      error.response.data ? alert(error.response.data.error) : alert(defaultMessage)
    else
      alert(noResponseFromServer)
  }
  
  // All methods related to auth here, have to update the user 
  const signup = async (email, password, passwordConfirmation) => {
    if(password != passwordConfirmation) {
      alert("Le mot de passe et la confirmation du mot de passe sont différents.")
      return
    } 

    const user = {email,password}
    try {
      const response = await axios.post('/users', { user })
      if (response.headers.authorization)
        Cookies.set("jwt", response.headers.authorization)
      
      setUser(response.data.user)
      navigate('/')
    } catch (error) {
      errorMessage(error, "Imposssible de s'inscrire.")
      // handleError(error)
    }
  }

  const signin = async (email, password) => {
    const user = {email,password}
    try{
      const response = await axios.post('/users/sign_in', {user})
      if (response.headers.authorization) 
        Cookies.set("jwt", response.headers.authorization)
      
      setUser(response.data.user)
      navigate('/')
    } catch (error){
      errorMessage(error, "Impossible de se connecter.")
      // handleError(error)
    }
  }
 
  const signout = async () => {
    try {
      await axios.delete('/users/sign_out',{
        headers: {
          'Authorization': `${Cookies.get("jwt")}`,
        },
      })
      Cookies.remove('jwt')
      setUser(null)
      navigate('/Login')
    } catch (error) {
      errorMessage(error, 'Impossible de se déconnecter.')
      // HandleError(error)
    }
  }

  const getSubscriptions = async () => {
    try {
      const {data} = await axios.get('/api/v1/subscriptions.json')
      setSubscriptions(data.subscriptions)
    } catch  (error) { /* handleError(error) */}
  }

  const isSubscribed = (course) => {
    return subscriptions.map(subscription => subscription.course_id).includes(course.id)
  }
  // Connect user with JWT is a jwt is set in cookies
  useLayoutEffect(() => {
    const jwt = Cookies.get("jwt")
    if (!jwt) return

    try {
      const loginWithToken = async () => {
        const {data} = await axios.post("/users/sign_in",{
          headers: {
            'Authorization': `${jwt}`,
          },
        })
        setUser(data.user)
        console.log("user", data.user)
        getSubscriptions()
      }
      loginWithToken()
    } catch (error) { /* handleError(error) */ }
  }, [])

  // Return the user object and auth methods
  return {
    user,
    signup,
    signin,
    signout,
    subscriptions,
    getSubscriptions,
    isSubscribed,
  };

}

const handleError = (error) => {
  console.log("###########  Error  ###########")
  if(error.response) {
    // The request was made and the server responded with a status code != of 2xx
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
  } else if (error.request) {
    // The request was made but no response was received.
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in Node.js
    console.log(error.request)
  } else {
    console.log('Error => ',error.message)
  }
  console.log(error)
  console.log("---------  End Error  ---------")
}

