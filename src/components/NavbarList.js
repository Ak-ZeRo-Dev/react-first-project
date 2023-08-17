import { Link } from "react-router-dom";

export default function NavbarList() {
  const mainList = [
    {
      title: "Home",
      id: "home-li",
    },
    {
      title: "About",
      id: "about-li",
    },
    {
      title: "Contact",
      id: "contact-li",
    },
  ];
  return (
    <ul className="main-list">
      {mainList.map((ele) => (
        <li id={ele.id} key={ele.id}>
          {ele.title.toLowerCase() === `home` ? (
            <Link to="/">{ele.title}</Link>
          ) : (
            <Link to={ele.title.toLowerCase()}>{ele.title}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}
