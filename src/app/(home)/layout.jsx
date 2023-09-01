import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/NavBar";

const HomePage = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default HomePage;