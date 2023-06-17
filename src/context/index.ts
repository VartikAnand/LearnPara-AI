import { FaDiscord, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

type IconType = typeof FaDiscord | typeof FaInstagram | typeof FaTwitter | typeof FaGithub;

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/about/Documentation" },
      { title: "Featured", url: "/about/Documentation" },
      // { title: "Partnership", url: "/" },
      // { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Featured",
    links: [
      
      { title: "Blog", url: "/blog" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "",icon: FaDiscord, url: "/" },
      { title: "", icon: FaInstagram, url: "/" },
      { title: "",icon: FaTwitter, url: "/" },
      {title: "",  icon: FaGithub, url: "/" },  
    
    ],
  },
];
