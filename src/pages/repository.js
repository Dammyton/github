import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../components/profile.js";
import Repo from "../components/repo.js";
import { getItemFromLocalStorage } from "../utils.js";

const Repository = () => {
  const navigate = useNavigate();
  const user = getItemFromLocalStorage("user");

  useEffect(() => {
    if (getItemFromLocalStorage("isLoggedIn") !== true) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="main">
      <Profile user={user} />
      <Repo user={user} />
    </div>
  );
};

export default Repository;
