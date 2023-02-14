import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const d = new Date();
	const LoginTime = d.getTime();
	let parsedLocalData = { Role: "", Token: "" };

	const localStoredData = localStorage.getItem("User Info");
	const FirstLoginTime = JSON.parse(localStorage.getItem("User time"));
	let Expire = false;
	if (localStoredData) {
		Expire = LoginTime - FirstLoginTime.StoreLoginTime >= 86400000;
	}
	if (Expire) {
		localStorage.clear();
	}

	if (localStoredData && !Expire) {
		parsedLocalData = JSON.parse(localStoredData);
	}

	const [auth, setAuth] = useState({
		Role: parsedLocalData.LocalRole,
		Token: parsedLocalData.LocalToken,
	});

	return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
