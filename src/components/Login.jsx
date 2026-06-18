import {useForm} from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() { 
const navigate = useNavigate();
const { register, handleSubmit, formState: { errors }, reset } = useForm()

const handleLogin = async (data) => {
    try {
        const { email, password } = data;
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
    
        const res=await axios.post(`http://localhost:3000/api/v1/auth/login`, formData, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        reset();

        console.log("res.data.userRole==============", res.data);

        const role=res.data.loggedInUser?.userRole;

    localStorage.setItem("userRole",role);

        console.log("userRole==============", role);

        if(role==="admin"){
            navigate("/adminDashboard");

        }else{
            navigate("/landingPage");

        }
    }
        catch (error) {
        console.log(error)
    }
}
 return (
   <form>
        <form onSubmit={handleSubmit(handleLogin)}></form>
                <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h1 className="text-2xl font-bold">Login Page</h1> 
 <input {...register("email", { required: "Email is required" })} type="text" placeholder="Email" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="password" placeholder="Password" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <span className="text-[#FFA831] hover:underline cursor-pointer">Forgot Password?</span>
            <button className="bg-[#FFA831] hover:bg-[#FFA831] text-white font-bold py-2 px-4 rounded " type="submit">Login</button>
            
            <span>Don't have an account? <a href="/signup" className="text-[#FFA831] hover:underline">Signup</a></span>
        </div>
        </form>
 );}
     export default Login
        