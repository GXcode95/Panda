import React from 'react'
import { TextField } from '@mui/material'

const PasswordInput = (props) => {
  return <TextField
    margin="normal"
    required
    fullWidth
    name="password"
    label="Mot de passe"
    type="password"
    id="password"
    autoComplete="Mot de passe"
    {...props}
  />
}

export default PasswordInput