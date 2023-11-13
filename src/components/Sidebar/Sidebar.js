import styles from "./sidebar.module.css";

const Sidebar = () => {
  const sidebarItems = [
    {
      name: "Home",
      icon: <i className="fa-solid fa-house" />,
    },
    {
      name: "Cerca",
      icon: <i className="fa-solid fa-magnifying-glass" />,
    },
    {
      name: "Esplora",
      icon: <i className="fa-solid fa-compass" />,
    },
    {
      name: "Crea",
      icon: <i className="fa-solid fa-plus" />,
    },
    {
      name: "Profilo",
      icon: <i className="fa-solid fa-user" />,
    },
    {
      name: "Altro",
      icon: <i className="fa-solid fa-ellipsis" />,
    },
  ];

  const listItems = sidebarItems.map((item, i) => {
    return (
      <li key={i}>
        <span>{item.icon}</span>
        <span>{item.name}</span>
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
