import React from 'react'
import { TextField } from '@mui/material'

const PasswordConfirmationInput = (props) => {
  return <TextField
    margin="normal"
    required
    fullWidth
    name="password_confirmation"
    label="Mot de passe"
    type="password"
    id="password_confirmation"
    autoComplete="Confirmation du mot de passe"
    {...props}
  />
}

export default PasswordConfirmationInput