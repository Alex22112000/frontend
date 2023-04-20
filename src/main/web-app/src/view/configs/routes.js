import CAddProdPage from "../pages/CAddProdPage/CAddProdPage";
import CCatalogPage from "../pages/CCatalogPage/CCatalogPage";
import CDeleteProdPage from "../pages/CDeleteProdPage/CDeleteProdPage";
import CLogPage from "../pages/CLogPage/CLogPage";
import CRegPage from "../pages/CRegPage/CRegPage";
import SettingPage from "../pages/SettingPage/SettingPage";
import Test from "../pages/Test";
import TestPage from "../pages/TestPage";

export const authRoutes = [
    {
        path: "/catalog",
        component: <CCatalogPage />
    },
    {
        path: "/products/add",
        component: <CAddProdPage />
    },
    {
        path: "/products/delete",
        component: <CDeleteProdPage />
    },
    {
        path: "/setting",
        component: <SettingPage />
    }
]

export const publicRoutes = [
    {
        path: "/",
        component: <CLogPage />
    },
    {
        path: "/register",
        component: <CRegPage />
    },
    {
        path: "/test",
        component: <TestPage />
    },
    {
        path: "/page",
        component: <Test />
    }
]