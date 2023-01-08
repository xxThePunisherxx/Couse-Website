import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Courses from "./Pages/Courses/Courses";
import Comming from "./Pages/CommingSoon/Comming";
import ClientsAll from "./Pages/Clients/ClientsAll";
import NotFound from "./Pages/NotFound/NotFound";
import Admin from "./Pages/Admin/Admin";
import Test from "./Pages/TestPage/Test";
import ScrollToTop from "./Components/ScrollToTop";
import IndividualCourse from "./Pages/IndividualCourse/IndividualCourse";
import ClientLayout from "./Components/ClientLayout/ClientLayout";

function App() {
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<ClientLayout />}>
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
						<Route path="/test" element={<Test />} />
						<Route path="*" element={<NotFound />} />
						<Route path="/course-view/:courseID" element={<IndividualCourse />} />
					</Route>
					<Route>
						<Route path="/admin" element={<Admin />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
