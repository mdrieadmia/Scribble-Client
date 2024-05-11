import { Link } from "react-router-dom";
import FooterContent from "../../components/Footer/FooterContent";
import MainMenu from "../../components/Navbar/MainMenu";

const ErrorPage = () => {
    return (
        <div>
            <MainMenu/>
            <div className="min-h-[calc(100vh-433px)]">
                <h1 className="text-8xl text-center pt-10 font-bold text-red-600">404</h1>
                <h2 className="text-lg font-semibold text-center text-red-500">Oops! Something went worng!</h2>
                <h2 className="font-semibold text-center text-green-600">Please go back to home</h2>
                <div className="flex justify-center items-center pt-5 mb-5">
                    <Link to={'/'} className="text-center px-5 py-2 rounded-md bg-green-600 text-white font-semibold">Home</Link>
                </div>
            </div>
            <FooterContent/>
        </div>
    );
};

export default ErrorPage;