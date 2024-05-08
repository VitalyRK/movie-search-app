import { NavLink } from "react-router-dom";

interface ButtonProps {
  title: string;
  path: string;
  onClose?: () => void;
}

const NavButton = ({ onClose: close, title, path }: ButtonProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? "active__nav__button" : "inactive__nav__button"
      }
    >
      <button onClick={close} className="nav__button">
        {title}
      </button>
    </NavLink>
  );
};

export default NavButton;
