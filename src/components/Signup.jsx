import { Input } from "postcss"
import { useForm } from "react-hook-form"
import axios from "axios"

function Signup() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const handleSignup = async (data) => {

        try {
            const { firstName, lastName, email, password } = data;
            const formData = new FormData();
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("email", email);
            formData.append("password", password);


            const res = await axios.post(`http://localhost:3000/api/v1/auth/register`, formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            
            reset();


        } catch (error) {
            console.log(error)
        }




    }
    return (
        <form onSubmit={handleSubmit(handleSignup)}>
            <div className="">
                <h1>Signup Page</h1>
                <input type="text" placeholder="Firstname" className=""
                    {...register("firstName", { required: true, })}
                />
                {errors.firstName && <p className="">Firstname is required</p>}
                <input type="text" placeholder="Lastname" className=""
                    {...register("lastName", { required: true })}
                />
                {errors.lastName && <p className="text-red-500">Lastname is required</p>}
                <input type="email" placeholder="Email" className=""
                    {...register("email", { required: true })}
                />
                {errors.email && <p className="text-red-500">Email is required</p>}
                <input type="password" placeholder="Password" className=""
                    {...register("password", { required: true})}
                />
                {errors.password && <p className="">Password is required</p>}
                <button className="" type="submit">Signup</button>
            </div>
        </form>

    )
}

export default Signup