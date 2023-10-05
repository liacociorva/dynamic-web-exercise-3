import Link from "next/link";

const Header = () => (
    <header>
        <nav>
            <Link href='/Tokyo'>Tokyo</Link>
            <Link href='/London'>London</Link>
            <Link href='/New York'>New York</Link>
            <Link href='/Buenos Aires'>Buenos Aires</Link>
        </nav>
    </header>
);
export default Header;