export default function Header() {
    return (
        <header className="fixed inset-x-0 top-0 h-16 backdrop-blur-md bg-white/70 border-b border-gray-200 z-50">

            <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-6 sm:px-8">

                <h1 className="text-base sm:text-lg font-semibold tracking-wide">
                    LEON KONDO
                </h1>

                <nav className="flex items-center gap-6 sm:gap-10 text-xs sm:text-sm tracking-widest">
                    <a href="#about" className="text-gray-600 hover:text-black transition">
                        ABOUT
                    </a>
                    <a href="#works" className="text-gray-600 hover:text-black transition">
                        WORKS
                    </a>
                    <a href="#contact" className="text-gray-600 hover:text-black transition">
                        CONTACT
                    </a>
                </nav>
            </div>
        </header>
    );
}
