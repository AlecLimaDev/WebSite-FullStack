export interface FormValues {
  name?: string;
  email: string;
  password: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

export function useLoginValidation() {
  function LoginValidation(values: FormValues): FormErrors {
    const errors: FormErrors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.email === "") {
      errors.email = "O campo nome está vazio";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Formato de email inválido";
    } else {
      errors.email = ""; 
    }

    if (values.password === "") {
      errors.password = "O campo senha está vazio";
    } else if (!password_pattern.test(values.password)) {
      errors.password = "Formato de senha inválido";
    } else {
      errors.password = "";
    }

    return errors;
  }
  return {
    LoginValidation,
  };
}
