import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface MenuItemProps {
  icon: ReactNode;
  text: string;
  link: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, link }) => {
  return (
    <Link to={link} className="dropdown-item">
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default MenuItem;
