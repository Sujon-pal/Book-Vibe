import { Outlet } from "react-router";
import Nav from "../../components/Header/Nav";
import Footer from "../../components/Footer/Footer";

const Root = () => {
    return (
        <div className="mx-auto max-w-11/12">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;