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
  const navigate = useNavigate()
  
  // All methods related to auth here, have to update the user 
  const signup = async (email, password, passwordConfirmation) => {
    if(password != passwordConfirmation) return 
    const user = {email,password}
    try {
      const response = await axios.post('/users', { user })
      // console.log("#signup", response.data)
      if (response.headers.authorization) Cookies.set("jwt", response.headers.authorization)
      setUser(response.data.user)
      navigate('/')
    } catch (error) {
      console.log("#signup",error)
    }
  }

  const signin = async (email, password) => {
    const user = {email,password}
    console.log("#signin")
    try {
      const response = await axios.post('/users/sign_in', {user})
      // console.log("#signin", response.data)
      if (response.headers.authorization) Cookies.set("jwt", response.headers.authorization)
      setUser(response.data.user)
      navigate('/')

    } catch (error){
      console.log( error)
    }
  }
 
  const signout = async () => {
    console.log("#signout")
    try {
      const { data } = await axios.delete('/users/sign_out',{
        headers: {
          'Authorization': `${Cookies.get("jwt")}`,
        },
      })
      // console.log("#signout", data)
      Cookies.remove('jwt')
      navigate('/Login')
    } catch (error) {
      console.log(error)
    }
  }

  // Connect user with JWT is a jwt is set in cookies
  useLayoutEffect(() => {
    const jwt = Cookies.get("jwt")
    console.log("#singinWithJwt",jwt)
    console.log(typeof jwt)
    if (jwt) {
      const loginWithToken = async () => {
        const {data} = await axios.post("/users/sign_in",{
          headers: {
            'Authorization': `${jwt}`,
          },
        })
        console.log(data)
        setUser(data.user)
      }
    console.log("#singinWithJwt",jwt)

      loginWithToken()
    }
    console.log("#singinWithJwt",jwt)

  }, [])

  // Return the user object and auth methods
  return {
    user,
    signup,
    signin,
    signout,
  };

}
