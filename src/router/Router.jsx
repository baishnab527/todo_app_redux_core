import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./private/PrivateRoute";
import PublicRoute from "./public/PublicRoute";

// create a router; 
const router = createBrowserRouter([...PrivateRoute, ...PublicRoute]);

// export default router;
export default router;