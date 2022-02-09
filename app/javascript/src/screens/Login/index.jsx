import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import EmailInput from '../../components/inputs/EmailInput'
import PasswordInput from '../../components/inputs/PasswordInput'
import PasswordConfirmationInput from '../../components/inputs/PasswordConfirmationInput'

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(false)
  const {signin, signup} = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const passwordConfirmation = e.target.password_confirmation?.value

    isRegistered ? 
      signin(email, password) :
      signup(email, password, passwordConfirmation)
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          {isRegistered ? "Connection" : "Inscription"}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <EmailInput />
          <PasswordInput />
          {!isRegistered && <PasswordConfirmationInput />}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {isRegistered ? "Se connecter" : "S'inscrire"}
          </Button>

          <Grid container>
            <Grid item xs>
              <Link variant="body2">
                Mot de passe oublié ?
              </Link>
            </Grid>
            <Grid item>
              <Link  variant="body2" onClick={e => setIsRegistered(!isRegistered)}>
                {isRegistered ? "S'inscire" : "Déja un compte ? connectez vous."}
              </Link>
            </Grid>
          </Grid>
        </Box>

      </Box>
    </Container>
  )
};

export default Login;



