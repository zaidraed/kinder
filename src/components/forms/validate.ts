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
    password2: {
      error: false,
      Message: "",
    },
  }

  if (!/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(input.Name)) {
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
  if (input.password2 !== input.password) {
    errors.password2.error = true
    errors.password2.Message = "Contraseña no coinciden"
  }

  return errors
}
