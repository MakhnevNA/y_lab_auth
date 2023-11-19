import { useState, useCallback } from "react";
import Content from "./components/content/Content";
import Login from "./components/login/Login";

const fakeFetch = async (url, options) => {
    await new Promise((resolve) => setTimeout(resolve, 400));

    if (url === "/signIn") {
        const { email, password } = JSON.parse(options?.body ?? "{}");

        if (email === "admin@admin.com" && password === "admin") {
            return new Response("", {
                status: 200,
                statusText: "OK",
            });
        }
    }
    return new Response("", {
        status: 404,
        statusText: "Not Found",
    });
};

function App() {
    const [auth, setAuth] = useState(false);

    const authToAcc = useCallback(async (email, password) => {
        const fetchToServer = fakeFetch("/signIn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        try {
            const response = await fetchToServer;
            if (response.status === 200) {
                setAuth(true);
            } else {
                alert("Неверный логин или пароль");
            }
        } catch (e) {
            throw new Error("error");
        }
    }, []);

    return auth ? <Content /> : <Login authToAcc={authToAcc} />;
}

export default App;
