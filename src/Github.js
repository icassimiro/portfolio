import { FaGithub } from "react-icons/fa";

const Githubs = [
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/icassimiro",
    target: "_blank",
  },
];

const Github = () => {
  return (
    <div className="social-icons">
      {Githubs.map((network) => (
        <a
          href={network.link}
          className="social-btn"
          id={network.name}
          key={network.name}
          target={network.target}
        >
          {network.icon}
        </a>
      ))}
    </div>
  );
};

export default Github;
