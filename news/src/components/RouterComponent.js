import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";
import News from "./News";
import NewsDetails from "./NewsDetails";
import DashboardComponent from "./admin/DashboardComponent";
import RouteMiddleware from "../middleware/RouteMiddleware";
import Register from "./Register";
import Login from "./Login";
import Memberlist from "./admin/Memberlist";
import Uploadcontent from "./admin/Upload";
import PasswordReset from "./PasswordReset";
import ResetConfirm from "./ResetConfirm";
import CategoryComponent from "./admin/CategoryComponent";
import AddNewsComponent from "./admin/AddNewsComponent";
function RouterComponent() {
  return (
    <Routes>        
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/password-reset" element={<PasswordReset/>} />
        <Route path="/reset-confirm/:token" element={<ResetConfirm/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/news-details/:id" element={<NewsDetails/>} />

        <Route path="admin" element={<RouteMiddleware/>}>
            <Route path="/admin" element={<DashboardComponent/>} />
            <Route path="members-list" element={<Memberlist/>} />
            <Route path="upload-content" element={<Uploadcontent/>} />
            <Route path="manage-category" element={<CategoryComponent/>} />
            <Route path="add-news" element={<AddNewsComponent/>} />
        </Route>
        

        <Route path="*" element={<PageNotFound/>} />
    </Routes>
  );
}

export default RouterComponent;