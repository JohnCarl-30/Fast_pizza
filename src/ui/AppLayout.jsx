import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Cart from "../features/cart/Cart";
import { Outlet } from "react-router-dom";

function AppLayout() {
    return (
        <div className="layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <CartOverview />

        </div>
    );
}

export default AppLayout;