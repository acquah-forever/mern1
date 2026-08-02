import { useForm } from "react-hook-form";

interface FormValues {
  email: string,
  passsword: string
}

const Login = () => {

  const { register, handleSubmit, formState: {errors } } = useForm<FormValues>();

  return (
    <div>
      
    </div>
  )
}

export default Login
