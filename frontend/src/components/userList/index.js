import React from "react";
import { FaUserAlt } from "react-icons/fa";

const UserList = () => {
  const userCollection = [
    { id: 1, value: "Oscar Melendez" },
    { id: 2, value: "Eduardo Alvarez" },
    { id: 3, value: "Carlos Gutierrez" },
    { id: 4, value: "Alejandro Melendez" },
    { id: 5, value: "Cesar Mata" },
    { id: 6, value: "José Peraza" },
  ];
  return (
    <div className="user-filter">
      <ul>
        {userCollection.map(({ id, value }, i) => (
          <li key={i}>
            <UserIcon id={id} value={value} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const UserIcon = (props) => {
  return (
    <div className="icon-container">
      <label className="userIcon">
        <input id={props.id} type="checkbox" value={props.value} />
        <div className="toggle">
          <FaUserAlt />
        </div>
      </label>
    </div>
  );
};

export default UserList;
