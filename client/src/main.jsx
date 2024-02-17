import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Nav from "./components/Navigation/Nav/Nav.jsx";
import ErrorPage from "./components/Errors/ErrorPage.jsx";
import LoginPage from "./components/Login.SignUp/Login/LoginPage.jsx";
import SignupPage from "./components/Login.SignUp/SignUp/SignupPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/sign-up",
		element: <SignupPage />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Nav />
		<RouterProvider router={router} />
	</React.StrictMode>
);
