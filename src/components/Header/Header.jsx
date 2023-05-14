import "./Header.css";
import img from "./logo.png";

const Header = (props) => {
  return (
    <div className="Header">
      <img src={img} alt="logo" />
      <h1>{props.greeting}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default Header;
