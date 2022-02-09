import React from 'react'
import { TextField } from '@mui/material'

const EmailInput = (props) => {
  return  <TextField
    margin="normal"
    required
    fullWidth
    id="email"
    label="Email"
    name="email"
    autoComplete="Email"
    autoFocus
    {...props}
  />
}

export default EmailInput