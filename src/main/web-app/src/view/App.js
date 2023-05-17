import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "./configs/routes";
import { useUserInfo, useAuthUser } from "../state/mobx/user/hooks";
// import { useAuthUser, useUserInfo } from "../redux/hooks";
import AuthService from "../model/services/authService";

async function checkAuth() {
  const login = AuthService.getLogin();
  const password = AuthService.getPassword();
  let authStatus = false;
  await AuthService.signIn(login, password)
    .then(() => authStatus = true)
    .catch(() => authStatus = false)
  return authStatus;
}

function Routing() {
  const [loading, setLoading] = useState(true);
  const { signIn } = useAuthUser();
  useEffect(() => {

    const check = async () => {
      try {
        const status = await checkAuth();
        if (status) {
          const token = localStorage.getItem("token");
          const payload = token.split(".")[1];
          const userInfo = JSON.parse(atob(payload));
          signIn(true, AuthService.getLogin(), AuthService.getPassword(), userInfo["role"]);
        }
      } finally {
        setLoading(false);
      }
    }
    check();
  }, [signIn]);

  if (loading) {
    return <div>
      Loading...
    </div>
  }

  return <App/>

}


function App() {
  const userInfo = useUserInfo();
  const redirect = <Navigate to="/" replace />
  return (
    <Routes>
      {
        authRoutes.map(({ path, component }) =>
          <Route key={path} path={path} element={userInfo.isAuth ? component : redirect} exact />
        )
      }
      {
        publicRoutes.map(({ path, component }) =>
          <Route key={path} path={path} element={component} exact />
        )
      }
    </Routes>
  )
}

export default Routing;