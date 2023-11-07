import { ErrorType, FormValues } from "../../types/SignUpValidation.module";

function SignUpValidation(values: FormValues): ErrorType {
    let errors: ErrorType = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (!values.name) {
      errors.name = "O campo nome está vazio";
    } else {
      errors.name = "";
    }
  
    if (!values.email) {
      errors.email = "O campo email está vazio";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Esse formato de email é inválido";
    } else {
      errors.email = "";
    }
  
    if (!values.password) {
      errors.password = "O campo senha está vazio";
    } else if (!password_pattern.test(values.password)) {
      errors.password = "Esse formato de senha é inválido";
    } else {
      errors.password = "";
    }
  
    return errors;
  }
  

export default SignUpValidation;
