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


const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },

            {
                path:'/addCampaign',
                element:<AddCampaign></AddCampaign>,
                
            },
            {
                path:'/allCampaign',
                element:<AllCampaign></AllCampaign>,
                loader:()=>fetch('http://localhost:5000/allCampaign')
            },
          
            {
                path:'/myCampaign',
                element:<MyCampaign></MyCampaign>
            },
            {
                path:'/myDonations',
                element:<MyDonation></MyDonation>
            },
            {
                path:'/campaign-details/:id',
                element:<CampaignDetails></CampaignDetails>,
                loader:({params})=>fetch(`http://localhost:5000/details-campaign/${params.id}`)
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