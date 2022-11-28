import { FaInstagram, FaNetworkWired } from "react-icons/fa";

const Instagrans = [
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://instagram.com",
    target: "_blank",
  },
];

const Instagram = () => {
  return (
    <div className="social-icons">
      {Instagrans.map((insta) => (
        <a
          href={insta.link}
          target={insta.target}
          id={insta.name}
          key={insta.name}
        >
          {insta.icon}
        </a>
      ))}
    </div>
  );
};

export default Instagram;
