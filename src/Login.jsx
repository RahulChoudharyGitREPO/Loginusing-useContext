import { useContext, useState } from "react";
import { AuthContext } from "./AuthContextProvider";
import axios from 'axios';

const initState = {
    email: "",
    password: "",
};

export default function Login() {
    const { login } = useContext(AuthContext);
    const [state, setState] = useState(initState);

    async function handleClick() {
        try {
            const response = await axios.post(`https://reqres.in/api/login`, state);

            if (response.status === 200) {
                const data = response.data;

                login(data.token);
            } else {
                console.error("Login failed");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value,
        });
    };

    const { email, password } = state;
    return (
        <div>
            <h1>Login</h1>
            <div className="login-form">
                <label htmlFor="email">
                    Email :{" "}
                    <input
                        type="text"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="password">
                    Password :{" "}
                    <input
                        type="password" // Use password type for password input
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={handleClick}>Login</button>
            </div>
        </div>
    );
}
