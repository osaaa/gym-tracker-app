import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Nav from "./components/Navigation/Nav/Nav.jsx";
import ErrorPage from "./components/Errors/ErrorPage.jsx";
import Login from "./components/Login.SignUp/Login.jsx";
import Signup from "./components/Login.SignUp/Signup.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/sign-up",
		element: <Signup />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Nav />
		<RouterProvider router={router} />
	</React.StrictMode>
);
