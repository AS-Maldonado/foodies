import Link from "next/link";
import Logo from "@/assets/logo.png";
import classes from "./header.module.css";
import Image from "next/image";
import HeaderBackground from "./header-background";
import NavLink from "./navlink";

export default function Header() {
    return (
        <>
            <HeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={Logo} alt="A plate with food on it" priority />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">
                                Foodies Community
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
