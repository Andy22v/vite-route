import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth";

export default function Dashboard() {
  const navigate = useNavigate();

  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("auth")));
  }, []);

  return isLogged ? (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <p>Nome: {auth.username}</p>
      <p>Age: {auth.age}</p>
    </div>
  ) : (
    navigate("/login")
  );
}
