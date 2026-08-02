import { useForm } from "react-hook-form";


type FormValues = {
  email: string,
  password: string
}

const Login = () => {


  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();



  function onsubmit(data: FormValues) {
    console.log(data)
    alert("hurrrrray")

  }

  return (
    <div className=" flex flex-col justify-center items-center gap-5 min-h-screen">
      <form className="bg-white border rounded-lg flex flex-col gap-4 px-15 py-5" onSubmit={handleSubmit(onsubmit)}>
        <div className="flex flex-col justify-center items-center gap-2 p-4">
          <h1 className="text-4xl">Log in</h1>
          <p className="text-sm">Dont have an account? <span className="cursor-pointer text-blue-400">Sign up</span></p>
        </div>
        
        <div className="flex flex-col border rounded">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter your email" {...register("email", { required: "Enter Email" })} />
          {errors.email && <span>{errors.email.message} </span>}
        </div>

        <div className="flex flex-col border rounded">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter your password" {...register("password", { required: "Enter Password" })} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
