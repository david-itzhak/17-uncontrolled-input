function Login() {
    function handelFormSubmit(event) {
        event.preventDefault();
        console.log(event.target.username.value)
        console.log(event.target.password.value)

        const userData = {
            userName: event.target.username.value,
            password: event.target.password.value
        }
        console.log(userData);
        alert(JSON.stringify(userData));
    }

    return (
        <>
            <h1>Login form</h1>
            <form onSubmit={handelFormSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password"/>
                </label>
                <button type="submit">Login</button>
            </form>
        </>

    )
}
export default Login;