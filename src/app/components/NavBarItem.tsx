import { Typography } from '@material-tailwind/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type NavBarItemPropsType = {
  pathName: string;
  name: string;
};

export default function NavBarItem({ pathName, name }: NavBarItemPropsType) {
  const pathname = usePathname();
  return (
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="flex items-center gap-x-2 p-1 font-medium"
    >
      <Link
        className={`link ${pathname === pathName && 'text-blue-900 font-bold'}`}
        href={pathName}
      >
        {name}
      </Link>
    </Typography>
  );
}
