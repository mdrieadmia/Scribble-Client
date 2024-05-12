import Banner from "../../components/Banner/Banner";
import HappyUsers from "../../components/HappyUsers/HappyUsers";
import Newsletter from "../../components/Newsletter/Newsletter";
import RecentBlog from "../../components/RecentBlog/RecentBlog";
import Spotlight from "../../components/Spotlight/Spotlight";

const Home = () => {
    return (
        <>
            <Banner/>
            <RecentBlog/>
            <Spotlight/>
            <HappyUsers/>
            <div className="py-10"></div>
            <Newsletter/>
        </>
    );
};

export default Home;