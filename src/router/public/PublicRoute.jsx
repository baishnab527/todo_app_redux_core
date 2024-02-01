import Layout from "../../component/layout/Layout";
import Home from "../../page/home/Home";

// create a private router;
const PublicRoute = [
    {
        element: < Layout/>,
        children: [
            {
                element: < Home/>,
                path: "/",
            }
        ]
    }
];

// export default PublicRoute;
export default PublicRoute;