import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import FooterLogo from '/public/circleLp.png';
import { footerLinks } from '@/context';

const currentYear = new Date().getFullYear();

interface LinkItem {
  title: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  url: string;
}

interface FooterLink {
  title: string;
  links: LinkItem[];
}

const Footer = () => (
  <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
    <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
      <div className="flex flex-col justify-start items-start gap-6">
        <Image src={FooterLogo} alt="logo" width={45} className="object-contain" />
        <p className="text-base font-semibold">
          LearnPara<br />
          All Rights Reserved &copy; {currentYear}
        </p>
      </div>

      <div className="footer__links grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {footerLinks.map((item: FooterLink) => (
          <div key={item.title} className="footer__link">
            <h2 className="font-bold text-xl">{item.title}</h2>
            <div className="flex flex-col gap-5 py-2">
              {item.links.map((link: LinkItem) => (
                <Link key={link.title} href={link.url} passHref={true}>
                  <p className=" text-lg flex gap-2 justify-self-auto hover:text-green-500 active:text-green-500">
                    {link.icon && <link.icon />}
                    <span>{link.title}</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-between items-center align-middle flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 ">
      <p className='hover:text-green-500'>&copy;{currentYear} LearnPara. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/about/PrivacyPolicy" passHref={true}>
          <p className="hover:text-green-500">Privacy & Policy</p>
        </Link>
        <Link href="/about/PrivacyPolicy" passHref={true}>
          <p className="hover:text-green-500">Terms & Condition</p>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
