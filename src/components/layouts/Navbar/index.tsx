'use client';
import React, { FC } from 'react';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { CodeXml, Globe, House, Mail, User } from 'lucide-react';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <House className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'About',
      link: '/about',
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Service',
      link: '/service',
      icon: <Globe className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Project',
      link: '/project',
      icon: <CodeXml className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: <Mail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Navbar;
