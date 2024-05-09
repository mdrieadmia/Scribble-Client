import { Outlet } from "react-router-dom";
import MainMenu from "../components/Navbar/MainMenu";
import FooterContent from "../components/Footer/FooterContent";

const Root = () => {
    return (
        <div>
            <MainMenu/>
            <div className="min-h-[calc(100vh-433px)]">
                <Outlet className="h-full" />
            </div>
            <FooterContent/>
        </div>
    );
};

export default Root;