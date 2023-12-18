import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home";
import Leads from "../Pages/Leads/Leads";
import Account from "../Pages/Account/Account";
import Contact from "../Pages/Contact/Contact";
import Opprotunities from "../Pages/Opprotunities/Opprotunities";
import Calender from "../Pages/Calender/Calender";
import Forecasts from "../Pages/Forecasts/Forecasts";
import Reports from "../Pages/Reports/Reports";
import Quotes from "../Pages/Quotes/Quotes";
import Campaigns from "../Pages/Campaigns/Campaigns";
import Tasks from "../Pages/Tasks/Tasks";
import Dashboard from "../Pages/Dashboard/Dashboard";
import OpprtunitiesDetails from "../Pages/Opprotunities/OpportunitiesDetails/OpprtunitiesDetails";
import NewDashboard from "../Pages/Dashboard/NewDashboard/NewDashboard";

const router = createBrowserRouter([
  {
      path: "*",
      element: <NotFound />,
  },
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/leads",
        element: <Leads/>,
      },
      {
        path: "/account",
        element: <Account/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/opportunities",
        element: <Opprotunities/>,
      },
      {
        path: "/opportunities/:_id",
        element: <OpprtunitiesDetails />,
      },
      {
        path: "/calender",
        element: <Calender/>,
      },
      {
        path: "/forecasts",
        element: <Forecasts/>,
      },
      {
        path: "/reports",
        element: <Reports/>,
      },
      {
        path: "/quotes",
        element: <Quotes/>,
      },
      {
        path: "/campaings",
        element: <Campaigns/>,
      },
      {
        path: "/tasks",
        element: <Tasks/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
      {
        path: "/newDashboard",
        element: <NewDashboard />,
      },
    ],
  },
]);

export default router;
