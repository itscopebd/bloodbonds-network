import Footer from "@/components/footer/Footer";
const HomePage = ({children}) => {
    return (
        <div>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default HomePage;