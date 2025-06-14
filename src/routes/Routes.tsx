import { createBrowserRouter } from "react-router-dom";
import LandingPageLayout from "../views/layout/LandingPageLayout";
import LandingPage from "../views/pages/landing/LandingPage";
import Project from "../views/pages/project/Project";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout />,
    children: [
      {
        path: "/",
        // element: <Navigate to="/" replace />,
        element: <LandingPage />,
      },

      {
        path: "/projects",
        element: <Project />,
      },
    ],
  },
]);

export default router;
