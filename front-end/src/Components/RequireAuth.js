// import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
	const { auth } = useAuth();

	const location = useLocation();

	return allowedRoles.includes(auth.Role) ? (
		<Outlet />
	) : auth.Role ? (
		<Navigate to="/unauthorized" state={{ from: location }} replace />
	) : (
		<Navigate to="/adminLogin" state={{ from: location }} replace />
	);
};

export default RequireAuth;
