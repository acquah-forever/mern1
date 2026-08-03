import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CircleAlert } from "lucide-react";


type FormValues = {
  email: string,
  password: string
}

const Login = () => {


  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const navigate = useNavigate()



  function onsubmit(data: FormValues) {
    console.log(data)
    navigate("/")
  }

  function handleClick() {
    navigate("/signup")
  }

  return (
    <div className=" flex flex-col justify-center items-center gap-5 min-h-screen px-5">
      <form className="bg-white/50 sm:border rounded-lg flex flex-col gap-4 px-5 sm:px-30 py-5 max-w-2xl w-full" onSubmit={handleSubmit(onsubmit)}>
        <div className="flex flex-col justify-center items-center gap-3 p-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Log in</h1>
          <p className="text-sm">Dont have an account? <span className="cursor-pointer text-blue-400 text-sm" onClick={handleClick}>Sign up</span></p>
        </div>

        <div className="sm:p-1 flex flex-col border hover:border-blue-500 rounded-lg">
          <label className="pl-3 py-1 text-sm" htmlFor="email">Email</label>
          <input className="px-4 py-0.5 outline-none border-none" id="email" type="email" {...register("email", { required: "Enter an email address, like name@example.com" })} />
        </div>
        {errors.email && <span className="text-red-500 text-sm font-semibold flex items-center">
          <CircleAlert className="mr-1" size={15} />
          {errors.email.message} </span>}

        <div className="sm:p-1 flex flex-col border hover:border-blue-500 rounded-lg">
          <label className="pl-3 py-1 text-sm" htmlFor="password">Password</label>
          <input className="px-4 py-0.5 outline-none border-none" id="password" type="password" {...register("password", { required: "This field is required" })} />
        </div>
        {errors.password && <span className="text-red-500 text-sm font-semibold flex items-center">
          <CircleAlert className="mr-1" size={15} />
          {errors.password.message}</span>}
        <span className="cursor-pointer underline hover:text-slate-500 text-sm">Forgot Password?</span>
        <button className="bg-blue-600 text-white rounded-lg py-3 sm:py-4 text-md sm:text-xl mb-7 hover:bg-blue-500 cursor-pointer" type="submit">Login</button>
        <div className="flex items-center">
          <div className="grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-black">OR</span>
          <div className="grow border-t border-gray-300"></div>
        </div>
        <button className="btn  btn-md sm:btn-xl bg-white text-black border-[#e5e5e5]">
          <svg aria-label="Google logo" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Login with Google
        </button>
        <button className="btn  btn-md sm:btn-xl bg-[#1A77F2] text-white border-[#005fd8]">
          <svg aria-label="Facebook logo" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
          Login with Facebook
        </button>
        <button className="btn btn-md sm:btn-xl bg-black text-white border-black">
          <svg aria-label="Apple logo" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1195 1195"><path fill="white" d="M1006.933 812.8c-32 153.6-115.2 211.2-147.2 249.6-32 25.6-121.6 25.6-153.6 6.4-38.4-25.6-134.4-25.6-166.4 0-44.8 32-115.2 19.2-128 12.8-256-179.2-352-716.8 12.8-774.4 64-12.8 134.4 32 134.4 32 51.2 25.6 70.4 12.8 115.2-6.4 96-44.8 243.2-44.8 313.6 76.8-147.2 96-153.6 294.4 19.2 403.2zM802.133 64c12.8 70.4-64 224-204.8 230.4-12.8-38.4 32-217.6 204.8-230.4z"></path></svg>
          Login with Apple
        </button>
        <div className="flex items-center mt-10">
          <div className="grow border-t border-black"></div>
          <div className="grow border-t border-black"></div>
        </div>
        <div className="flex justify-center items-center gap-5 mt-5 text-sm text-gray-500">
          <span className="cursor-pointer underline font-bold text-xs sm:text-sm">Terms of Use</span>
          <span className="cursor-pointer underline font-bold text-xs sm:text-sm">Privacy Policy</span>
        </div>
      </form>
    </div>
  )
}

export default Login
