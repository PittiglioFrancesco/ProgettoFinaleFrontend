import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  const sidebarItems = [
    {
      name: "Home",
      icon: <i className="fa-solid fa-house" />,
      path: "/",
    },
    {
      name: "Cerca",
      icon: <i className="fa-solid fa-magnifying-glass" />,
      path: "/search",
    },
    {
      name: "Esplora",
      icon: <i className="fa-solid fa-compass" />,
      path: "/explore",
    },
    {
      name: "Crea",
      icon: <i className="fa-solid fa-plus" />,
      path: "/create",
    },
    {
      name: "Profilo",
      icon: <i className="fa-solid fa-user" />,
      path: "/profile",
    },
    {
      name: "Altro",
      icon: <i className="fa-solid fa-ellipsis" />,
      path: "/other",
    },
  ];

  const listItems = sidebarItems.map((item, i) => {
    return (
      <li key={i}>
        <Link to={item.path}>
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </Link>
      </li>
    );
  });

  console.log(sidebarItems);
  return (
    <nav className={`${styles.sidebar} col-sm-1 col-xl-2`}>
      <p>Uglygram</p>
      <ul>{listItems}</ul>
    </nav>
  );
};

export default Sidebar;
