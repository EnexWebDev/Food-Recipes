import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/AllHomes/Home";

import'./pages/Back to top/Btop.css'
import Pdients from "./pages/AllHomes/Pdients";
import './pages/AllHomes/Home.css'
import './pages/AllHomes/Pdients.css'
import Igpage from "./pages/Igpage";
import Rmeals from "./pages/Rmeals";
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";


function App() {
	const [showLoginModal, setShowLoginModal] = useState(false);

	const toggleLoginModal = () => {
		setShowLoginModal(!showLoginModal);
	};

  return (
		<>
			<Header isLoginActive={showLoginModal} toggleLoginModal={toggleLoginModal} />
		  	<LoginModal isLoginActive={showLoginModal} toggleLoginModal={toggleLoginModal} />
			<Routes>
				<Route element={<Home />} path="/" />
				{/* <Route element={<Meals />} path='meals/' /> */}
				<Route element={<Igpage />} path="/ingredients" />
				<Route element={<Pdients />} path="meals/:id" />
				<Route element={<Rmeals />} path="random-meals/:id" />
				<Route
					element={<Rmeals />}
					path="ingredients/random-meals/:id"
				/>
			</Routes>
		</>
  );
}

export default App;
