import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Courses from "./Pages/Courses/Courses";
import Comming from "./Pages/CommingSoon/Comming";
import ClientsAll from "./Pages/Clients/ClientsAll";
import NotFound from "./Pages/NotFound/NotFound";
import Admin from "./Pages/Admin/Admin";
// import Test from "./Pages/TestPage/Test";
import ScrollToTop from "./Components/ScrollToTop";
import IndividualCourse from "./Pages/IndividualCourse/IndividualCourse";
import ClientLayout from "./Components/ClientLayout/ClientLayout";
import AddCourse from "./Pages/Add courses/AddCourse";
import AdminLayout from "./Components/AdminLayout/AdminLayout";
// import RemoveCourse from "./Pages/Update course/UpdateCourse";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
// import AdminSidebar from "./Components/Admin Side Bar/AdminSidebar";
import EnrollForm from "./Components/Enroll Form/EnrollForm";
import Updatecourse from "./Pages/Update course/UpdateCourse";
import AddCourseCate from "./Pages/Add Course Category/AddCourseCate";

function App() {
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<ClientLayout />}>
						<Route path="/" element={<Homepage />} />
						<Route path="/courses" element={<Courses />} />
						<Route path="/enroll" element={<EnrollForm />} />
						<Route path="/team" element={<Comming />} />
						<Route path="/aboutUS" element={<Comming />} />
						<Route path="contact" element={<Comming />} />
						<Route path="/gallery" element={<Comming />} />
						<Route path="/verify" element={<Comming />} />
						<Route path="/career" element={<Comming />} />
						<Route path="/services" element={<Comming />} />
						<Route path="/allClients" element={<ClientsAll />} />
						{/* <Route path="/test" element={<Test />} /> just for quick testing of page */}
						<Route path="*" element={<NotFound />} />
						<Route path="/course-view/:courseID" element={<IndividualCourse />} />
					</Route>
					<Route>
						<Route path="/admin" element={<Admin />} />
						<Route path="/admin" element={<AdminLayout />}>
							<Route path="addCourse" element={<AddCourse />} />
							<Route path="update/:courseID" element={<Updatecourse />} />
							<Route path="dashboard" element={<AdminDashboard />} />
							<Route path="addCategory" element={<AddCourseCate />} />
							{/* <Route path="side" element={<AdminSidebar />} />  just for testing sidebar component, to be removed at final  stage*/}
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
