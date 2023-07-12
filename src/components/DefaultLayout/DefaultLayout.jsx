import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styles from "./DefaultLayout.module.scss";

const DefaultLayout = ({ children }) => {
  const links = [
    {
      id: 1,
      name: "Homepage",
      value: "/",
    },

    {
      id: 2,
      name: "Login",
      value: "/login",
    },
  ];

  return (
    <div className={styles.DefaultLayout}>
      <div className={styles.navbar}>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.value}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
