import { createBrowserRouter } from "react-router-dom";
import Addcomments from "../components/addcomments/Addcomments";
import Addtodo from "../components/addtodo/Addtodo";
import Comment from "../components/comments/Comment";
import Complete from "../components/Complete/Complete";
import Login from "../components/login/Login";
import Mytodo from "../components/mytodo/Mytodo";
import Register from "../components/register/Register";
import Update from "../components/update/Update";
import Home from "../pages/Home";
import Private from "./Private";

const router = createBrowserRouter([
    {path: "/", element: <Home/>, children:[
        {path:"/", element: <Addtodo/> },
        {path: "/mytodo", element: <Mytodo/>},
        {path: "/comment/:id", element: <Private><Comment/></Private>, loader:({params}) =>  fetch(`https://server-steel-two.vercel.app/update/${params.id}`)},
        {path:"/complete", element:<Complete/>},
        {path:"/addcomment/:id", element:<Addcomments/>, loader:({params}) =>  fetch(`https://server-steel-two.vercel.app/update/${params.id}`)},
        {path:"/update/:id", element: <Update/>, loader:({params}) =>  fetch(`https://server-steel-two.vercel.app/update/${params.id}`)},
        {path: "/register", element: <Register/>},
        {path: "/login", element: <Login/>}
    ]}
])
export default router