import reactImg from "../../assets/react-core-concepts.png";
import "./header.css";

const readDescriptions = ["Fundamental", "Crusial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = readDescriptions[getRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylize atom" />
      <h1>React Essensial</h1>
      <p>
        {description} React concepts you will need for almost any going to
        build.{" "}
      </p>
    </header>
  );
}

export default Header;
