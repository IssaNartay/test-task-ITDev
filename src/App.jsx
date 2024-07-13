import  { useState, useEffect } from "react"
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom"
import Login from "./components/Login"
import Contents from "./components/Contents"

const App = () => {
	const [token, setToken] = useState(localStorage.getItem("token"))

	useEffect(() => {
		if (token) {
			localStorage.setItem("token", token)
		} else {
			localStorage.removeItem("token")
		}
	}, [token])

	const signout = () => {
		setToken(null)
	}

	return (
		<Router>
			<Routes>
				<Route
					path="/login"
					element={!token ? <Login setToken={setToken} /> : <Navigate to="/" />}
				/>
				<Route
					path="/"
					element={
						token ? <Contents signout={signout} /> : <Navigate to="/login" />
					}
				/>
			</Routes>
		</Router>
	)
}

export default App
