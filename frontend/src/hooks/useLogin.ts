import axios from "axios";
import { useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginValidation } from "./useLoginValidation";

interface FormValues {
  name?: string;
  email: string;
  password: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

export function useLogin() {
  const { LoginValidation } = useLoginValidation();
  const navigate = useNavigate();
  const [values, setValues] = useState<FormValues>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  async function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  useEffect(() => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      ...LoginValidation(values),
    }));
  }, [values]);

  async function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!errors.email && !errors.password) {
      try {
        const response = await axios.post("http://localhost:8081/login", values);

        if (response.status === 200) {
          navigate("/home");
        } else {
          alert("Senha errada ou conta inexistente");
        }
      } catch (error) {
        console.error("Erro ao tentar fazer login:");
      }
    }
  }

  return {
    handleInput,
    handleSubmit,
    navigate,
    errors,
  };
}
