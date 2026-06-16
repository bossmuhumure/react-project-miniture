function Login() { 



    return (
        <form>
                <div className="">
            <h1 className="">Login Page</h1> 

            <input type="text" placeholder="Username" className="" />
            <input type="password" placeholder="Password" className="" />
            <span className="">Forgot Password?</span>
            <button className="">Login</button>
            <span>Don't have an account? <a href="/signup">Signup</a></span>
        </div>
        </form>
    
    )
 }
 export default Login