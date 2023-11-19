/* eslint-disable react/prop-types */
import { useState } from "react";
import "./login.scss";

const Login = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    function onValueChangeLogin(e) {
        setLogin(e.target.value);
    }
    function onValueChangePassword(e) {
        setPassword(e.target.value);
    }

    function loginToAcc(e) {
        e.preventDefault();

        if (login && password) {
            props.authToAcc(login, password);
        }
    }

    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <form action="" className="form" onSubmit={loginToAcc}>
                        <h2 className="form__title">Sign In</h2>
                        <div className="form__input">
                            <div className="form__data">
                                <div className="input__login">
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        onChange={onValueChangeLogin}
                                        value={login}
                                        type="text"
                                        className="form__email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="input__password">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        onChange={onValueChangePassword}
                                        value={password}
                                        type="password"
                                        className="form__password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                            </div>

                            <button type="submit">
                                <span>Login</span>
                            </button>
                        </div>
                        <a href="" className="form__forgotPassword">
                            Forgot Password?
                        </a>
                        <span className="answer">
                            Логин/пароль - admin@admin.com/admin
                        </span>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
