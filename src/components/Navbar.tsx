import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center px-6">
                <h1 className="text-2xl font-bold text-primary">SolarPower</h1>
                <div className="space-x-6">
                    <Link href="/">Home</Link>
                    <Link href="#services">Services</Link>
                    <Link href="#contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;