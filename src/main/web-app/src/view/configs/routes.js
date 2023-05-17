import AddProdPage from "../pages/AddProdPage/AddProdPage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import DeleteProdPage from "../pages/DeleteProdPage/DeleteProdPage";
import LogPage from "../pages/LogPage/LogPage";
import RegPage from "../pages/RegPage/RegPage";
import SettingPage from "../pages/SettingPage/SettingPage";

export const authRoutes = [
    {
        path: "/catalog",
        component: <CatalogPage />
    },
    {
        path: "/products/add",
        component: <AddProdPage />
    },
    {
        path: "/products/delete",
        component: <DeleteProdPage />
    },
    {
        path: "/setting",
        component: <SettingPage />
    }
]

export const publicRoutes = [
    {
        path: "/",
        component: <LogPage />
    },
    {
        path: "/register",
        component: <RegPage />
    }
]