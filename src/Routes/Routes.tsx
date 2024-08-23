import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from "react-router-dom";
import HomePage from '../Pages/HomePage/HomePage';
import CreatorPage from '../Pages/CreatorPage/CreatorPage';
import AddCreator from "../Pages/AddCreator/AddCreator";
import EditCreator from '../Pages/EditCreator/EditCreator';
import Dashboard from "../Pages/Dashboard/Dashboard";
import NotFound from "../Pages/NotFound/NotFound";
import App from "../App";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path:"", element: <HomePage />},
            { path:"dashboard", element: <Dashboard />},
            { path:"creator/:creatorName/:id", element: <CreatorPage />},
            { path:"addcreator", element: <AddCreator />},
            { path:"edit/:id", element: <EditCreator />},
            { path:"*", element: <NotFound />},
        ]
    }
  
  

]);
