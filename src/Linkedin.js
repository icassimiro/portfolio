import { FaLinkedin } from "react-icons/fa";
const Linkedins = [
  {
    name: "linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/iago-cassimiro-71a7a7243/",
    target: "_blank",
  },
];

const Linkedin = () => {
  return (
    <div className="social-icons">
      {Linkedins.map((link) => (
        <a href={link.link} target={link.target} id={link.name} key={link.name}>
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default Linkedin;
