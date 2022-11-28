import { DiHtml5, DiCss3, DiJsBadge, DiReact } from "react-icons/di";

const habilitie = [
  { id: "html", name: "HTML5", icon: <DiHtml5 className="habilities-icons" /> },

  { id: "css", name: "CSS3", icon: <DiCss3 className="habilities-icons" /> },

  {
    id: "js",
    name: "JAVASCRIPT",
    icon: <DiJsBadge className="habilities-icons" />,
  },

  {
    id: "react",
    name: "REACT",
    icon: <DiReact className="habilities-icons" />,
  },
];

const Habilities = () => {
  return (
    <section className="allskill">
      <h2 className="title-text">HABILIDADES</h2>
      <div className="gridskill">
        {habilitie.map((hab) => (
          <div className="cardskill" id={hab.id} key={hab.id}>
            <div className="icons">
              {hab.icon}
              <h2 className="text-icon">{hab.name} </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilities;
