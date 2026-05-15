import { Outlet } from "react-router";
import Nav from "../../components/Header/Nav";
import Footer from "../../components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;