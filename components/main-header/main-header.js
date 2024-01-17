import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href='/'>
          <Image src={logoImg} alt='A plate with food on it.' priority />
          Next level food.
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse meals</NavLink>
              {/* <Link href='/meals' className={ path.startsWith('/meals') ? classes.active : undefined }>Browse meals</Link> */}
            </li>
            <li>
              <NavLink href='/community'>Foodies community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}