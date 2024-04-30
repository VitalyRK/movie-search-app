interface ButtonProps {
  title: string;
}

const NavButton = ({ title }: ButtonProps) => {
  return <button className="navButton">{title}</button>;
};

export default NavButton;
