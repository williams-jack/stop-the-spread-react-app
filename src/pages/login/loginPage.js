import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../services/auth-services/auth-service";

const LoginPage = ({ setLoggedIn, setRole, setUsername }) => {
    const [loginPayload, setLoginPayload] = useState({
        role: "User",
    });
    const onInputChange = (event) => {
        const name = event.target.name;
        console.log(`Input ${name} changing.`);
        setLoginPayload({
            ...loginPayload,
            [name]: event.target.value,
        });
    };
    const history = useHistory();
    const onSubmit = () => {
        console.log("Called on submit.");
        login(loginPayload).then((res) => {
            if (res.status == 200) {
                // Mark user as logged in.
                setLoggedIn(true);

                // Set username in app.
                setUsername(res.data.username);
                window.localStorage.setItem("username", res.data.username);

                // Set role in app.
                setRole(res.data.role);
                window.localStorage.setItem("role", res.data.role);

                // Push user to home tab.
                history.push("/");
            } else {
                // TODO: Flash message to the user.
            }
        });
    };
    return (
        <div className="d-flex justify-content-center">
            <form className="w-75">
                <div className="mb-3">
                    <label className="form-label" for="roles">
                        Type of Account
                    </label>
                    <select
                        id="roles"
                        name="role"
                        className="form-control"
                        onChange={onInputChange}
                    >
                        <option value="Business">Business</option>
                        <option value="User" selected>
                            Individual
                        </option>
                    </select>
                </div>
                <div classname="mb-3">
                    <label className="form-label" for="username">
                        Username:
                    </label>
                    <input
                        className="form-control"
                        name="username"
                        type="username"
                        placeholder="Username"
                        id="username"
                        onChange={onInputChange}
                    />
                </div>
                <div classname="mb-3">
                    <label className="form-label" for="password">
                        Password:
                    </label>
                    <input
                        className="form-control"
                        placeholder="Password"
                        type="password"
                        name="password"
                        id="password"
                        onChange={onInputChange}
                    />
                </div>
                <div className="d-flex mt-3 mb-2 justify-content-center">
                    <button
                        className="btn btn-success w-100"
                        type="button"
                        onClick={onSubmit}
                    >
                        Login
                    </button>
                </div>
                <div className="d-flex justify-content-center">
                    <Link to="/register" className="text-center">
                        Don't have an account? Sign up here.
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
