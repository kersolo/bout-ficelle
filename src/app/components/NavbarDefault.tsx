import React from 'react';
import {
  Navbar,
  Typography,
  IconButton,
  Collapse
} from '@material-tailwind/react';
import Image from 'next/image';
import Logo_boutficelle from '../../../public/logo_boutficelle.svg';
import NavBarItem from './NavBarItem';
import Link from 'next/link';

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 720 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row items-center md:gap-6">
      <NavBarItem pathName="/Knots" name="Les Noeuds" />
      <NavBarItem pathName="/MonkeyFist" name="Les Pommes de Toulines" />
      <NavBarItem pathName="/Equipment" name="Le Materiel" />
      <NavBarItem pathName="/WhoIAm" name="Qui suis-je" />
    </ul>
  );

  return (
    <Navbar className="mx-auto px-4 py-2 md:px-8 md:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link href={'/'}>
          <Image
            src={Logo_boutficelle}
            priority={true}
            alt="Logo Bout'ficelle"
          />
        </Link>
        <div className="hidden md:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4h160M4 12h160M4 20h160"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </Navbar>
  );
}
