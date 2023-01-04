import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Homepage from "./Pages/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import Courses from "./Pages/Courses/Courses";
import Comming from "./Pages/CommingSoon/Comming";
import ClientsAll from "./Pages/Clients/ClientsAll";
import NotFound from "./Pages/NotFound/NotFound";
// import Admin from "./Pages/Admin/Admin";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="/team" element={<Comming />} />
					<Route path="/aboutUS" element={<Comming />} />
					<Route path="contact" element={<Comming />} />
					<Route path="/gallery" element={<Comming />} />
					<Route path="/verify" element={<Comming />} />
					<Route path="/career" element={<Comming />} />
					<Route path="/services" element={<Comming />} />
					<Route path="/allClients" element={<ClientsAll />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>{" "}
		</>
	);
}

export default App;
