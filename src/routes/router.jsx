import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../pages/HomeLayout";
import Home from "../pages/Home";
import AllCampaign from "../pages/AllCampaign";
import AddCampaign from "../pages/AddCampaign";
import MyCampaign from "../pages/MyCampaign";
import MyDonation from "../pages/MyDonation";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import CampaignDetails from "../components/CampaignDetails";
import ErrorPage from "../pages/ErrorPage";
import UpdateCampaign from "../components/UpdateCampaign";
import PrivetRoute from "./PrivetRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        errorElement: <ErrorPage />,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },

            {
                path:'/addCampaign',
                element:<PrivetRoute><AddCampaign></AddCampaign></PrivetRoute>
                
            },
            {
                path:'/allCampaign',
                element:<AllCampaign></AllCampaign>
            },
          
            {
                path:'/myCampaign',
                element:<PrivetRoute><MyCampaign></MyCampaign></PrivetRoute>
            },
            {
                path:'/myDonations',
                element:<PrivetRoute><MyDonation></MyDonation></PrivetRoute>
            },
            {
                path:'/campaign-details/:id',
                element:<PrivetRoute><CampaignDetails></CampaignDetails></PrivetRoute>,
                loader:({params})=>fetch(`https://projects40-crowd-funding-server.onrender.com/details-campaign/${params.id}`)
            },
            {
                 path:'/update/:id',
                 element:<PrivetRoute><UpdateCampaign></UpdateCampaign></PrivetRoute>,
                 loader:({params})=>fetch(`https://projects40-crowd-funding-server.onrender.com/details-campaign/${params.id}`)
            }
        ]
    },
   
    {
        path:'/signIn',
        element:<SignIn></SignIn>
    },
    {
        path:'/signUp',
        element:<SignUp></SignUp>
    },
   

])

export default router;