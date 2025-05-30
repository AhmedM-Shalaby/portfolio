import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import MyProjects from "./layout/MyProjects";
import InTouch from "./layout/getInTouch";
import ProjectDetails from "./Components/projectDetails";
import About from "./layout/About";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "about", element: <About /> },
        { path: "intouch", element: <InTouch /> },
        { path: "portfolio", element: <MyProjects /> },
      ],
    },
    { path: "portfolio/:projectId", element: <ProjectDetails /> },
  ]);
  return <RouterProvider router={myRouter}></RouterProvider>;
}

export default App;
