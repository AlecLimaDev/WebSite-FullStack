import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUpValidation } from "./useSignUpValidation";

interface FormValues {
  name?: string;
  email?: string;
  password?: string;
}

interface ErrorType {
  name?: string;
  email?: string;
  password?: string;
}

export function useSignUp() {
  const { SignUpValidation } = useSignUpValidation();
  const navigate = useNavigate();
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<ErrorType>({
    name: "",
    email: "",
    password: "",
  });

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = SignUpValidation(values);

    if (
      validationErrors.name === "" &&
      validationErrors.email === "" &&
      validationErrors.password === ""
    ) {
      setErrors({
        name: "",
        email: "",
        password: "",
      });

      try {
        const response = await axios.post(
          "http://localhost:8081/signup",
          values
        );
        if (response.data) {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(validationErrors);
    }
  }

  return {
    errors,
    handleInput,
    handleSubmit,
  };
}
