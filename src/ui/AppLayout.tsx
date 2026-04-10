import Header from "./Header";
import Footer from "./Footer";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {

    const navigation = useNavigation()
    const isLoading = navigation.state === "loading";
    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto_auto]">
            {isLoading && <Loader />}
            <Header />
            <main className="overflow-scroll">
                <Outlet />
            </main>
            <CartOverview />
            <Footer />
        </div>
    );
}

export default AppLayout;