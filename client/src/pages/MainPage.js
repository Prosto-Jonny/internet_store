import NavBar from "../components/NavBar";
import MainSearch from "../components/MainSearch";
import GroupSearch from "../components/GroupSearch";
import SmallBanner from "../components/SmallBanner";
import Footer from "../components/Footer";



const MainPage = () => {
    return (
        <>
        <NavBar/>
        {/* <MainBanner/> */}
        <MainSearch/>
        <GroupSearch/>
        <SmallBanner/>
        <Footer/>
        </>
    );
};

export default MainPage;