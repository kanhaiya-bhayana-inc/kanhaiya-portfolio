import Link from "next/link";
import {Button} from './ui/button';
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="pt-8 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Kanhaiya<span className="text-white/60">.</span>
                </h1>
            </Link>

            {/* desktop nav & hire me button */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="mailto:ikanhaiyabhayana@outlook.com">
                    <Button className="border border-white bg-primary text-white hover:text-primary rounded-full flex items-center">Hire me</Button>
                </Link>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  );
}

export default Header;
