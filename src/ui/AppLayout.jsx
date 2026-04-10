import Header from "./Header";
import Footer from "./Footer";
import CartOverview from "../features/cart/CartOverview";
import Cart from "../features/cart/Cart";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {

    const navigation = useNavigation()
    const isLoading = navigation.state === "loading";
    return (
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto_auto]">
            {isLoading && <Loader />}
            <Header />
            <main>
                <Outlet />
            </main>
            <CartOverview />
            <Footer />
        </div>
    );
}

export default AppLayout;