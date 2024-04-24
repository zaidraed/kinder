import type React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useState } from "react"
import { validate } from "./validate"

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Jardin La Estacion
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()

export default function Register() {
  const [input, setInput] = useState({
    Name: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  })
  const [errors, setErrors] = useState({
    Name: {
      error: false,
      Message: "",
    },
    lastName: {
      error: false,
      Message: "",
    },
    email: {
      error: false,
      Message: "",
    },
    password: {
      error: false,
      Message: "",
    },
    password2: {
      error: false,
      Message: "",
    },
  })
  const handleChange = (event: any) => {
    console.log(event.target.name)
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    })
    setErrors(validate({ ...input, [event.target.name]: event.target.value }))
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setInput({
      Name: "",
      lastName: "",
      email: "",
      password: "",
      password2: "",
    })
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrate
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="Name"
                  required
                  fullWidth
                  helperText={errors.Name.Message}
                  error={errors.Name.error}
                  label="Nombre"
                  value={input.Name}
                  onChange={handleChange}
                  autoComplete="given-name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  helperText={errors.lastName.Message}
                  error={errors.lastName.error}
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  value={input.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  helperText={errors.email.Message}
                  error={errors.email.error}
                  label="Email"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  helperText={errors.password.Message}
                  error={errors.password.error}
                  name="password"
                  label="Contraseña"
                  type="password"
                  value={input.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  helperText={errors.password2.Message}
                  error={errors.password2.error}
                  name="password2"
                  label="Repita la Contraseña"
                  type="password"
                  value={input.password2}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              disabled={
                !input.Name ||
                !input.lastName ||
                !input.email ||
                !input.password ||
                !input.password2 ||
                errors.Name.error ||
                errors.lastName.error ||
                errors.email.error ||
                errors.password.error ||
                errors.password2.error
              }
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              href="/login"
            >
              Registro
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Si ya estas registrado, logueate aqui!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}
