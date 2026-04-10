import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-stone-800 text-stone-300">
            {/* Main footer content */}
            <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

                {/* Brand column */}
                <div>
                    <h3 className="font-serif text-2xl font-bold text-yellow-400 italic">
                        Fast Pizza
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-400">
                        Bringing the warmth of the oven to your heart, one slice at a time.
                    </p>
                    <div className="mt-4 flex gap-3">
                        <a href="#" aria-label="Favorites" className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-600 text-stone-400 transition-colors hover:border-yellow-400 hover:text-yellow-400">
                            ♥
                        </a>
                        <a href="#" aria-label="Share" className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-600 text-stone-400 transition-colors hover:border-yellow-400 hover:text-yellow-400">
                            ↗
                        </a>
                        <a href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-600 text-stone-400 transition-colors hover:border-yellow-400 hover:text-yellow-400">
                            ✦
                        </a>
                    </div>
                </div>

                {/* Explore column */}
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                        Explore
                    </h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li><Link to="/menu" className="transition-colors hover:text-yellow-400">Our Menu</Link></li>
                        <li><a href="#" className="transition-colors hover:text-yellow-400">Ingredients</a></li>
                        <li><a href="#" className="transition-colors hover:text-yellow-400">Franchise</a></li>
                        <li><a href="#" className="transition-colors hover:text-yellow-400">Sustainability</a></li>
                    </ul>
                </div>

                {/* Support column */}
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                        Support
                    </h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li><a href="#" className="transition-colors hover:text-yellow-400">Help Center</a></li>
                        <li><Link to="/order" className="transition-colors hover:text-yellow-400">Order Status</Link></li>
                        <li><a href="#" className="transition-colors hover:text-yellow-400">Returns</a></li>
                        <li><a href="#" className="transition-colors hover:text-yellow-400">Contact Us</a></li>
                    </ul>
                </div>

                {/* Newsletter column */}
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                        Stay Crusty
                    </h4>
                    <p className="mt-4 text-sm text-stone-400">
                        Join our pizza club for exclusive toppings and early access.
                    </p>
                    <div className="mt-3 flex">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-l-md border border-stone-600 bg-stone-700 px-3 py-2 text-sm text-stone-200 placeholder-stone-500 outline-none transition-colors focus:border-yellow-400"
                        />
                        <button className="rounded-r-md bg-yellow-500 px-3 py-2 text-stone-900 transition-colors hover:bg-yellow-400">
                            ➤
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom copyright bar */}
            <div className="border-t border-stone-700 px-6 py-4 text-center text-xs text-stone-500">
                © 2026 Fast Pizza Co. All rights reserved. Handcrafted with extra cheese.
            </div>
        </footer>
    );
}

export default Footer;