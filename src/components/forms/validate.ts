export const validate = (input: any) => {
  const errors = {
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
  }

  if (!/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(input.name)) {
    errors.Name.error = true
    errors.Name.Message = "Nombres no validos"
  }
  if (!/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(input.lastName)) {
    errors.lastName.error = true
    errors.lastName.Message = "Apellidos no validos"
  }
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      input.email,
    )
  ) {
    errors.email.error = true
    errors.email.Message = "ingrese un e-mail valido"
  }
  if (
    !/(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/.test(
      input.password,
    )
  ) {
    errors.password.error = true
    errors.password.Message = "Contraseña no valida"
  }

  return errors
}
