import React from "react";
import people from "../assets/people.svg";
import twitter from "../assets/twitter.svg";
import link from "../assets/link.svg";
import location from "../assets/location.svg";

const profile = ({ user }) => {
  return (
    <div className="profile">
      <div className="profile__info" id="profile-info">
        <div className="about">
          <div className="avatar" id="profile-avatar">
            <img id="profile__img" src={user?.avatar_url} alt="profile pic" />
          </div>

          <div className="metadata">
            <h1 className="name">{user?.name}</h1>
            <h3 className="username">{user?.login}</h3>
          </div>

          <button className="follow__btn">Follow</button>

          <p>{user?.bio}</p>

          <div className="social__metrics">
            <span>
              <img src={people} alt="people" className="icon"  />
              <span>{user?.followers} </span> followers
            </span>
            &nbsp;&middot;&nbsp;
            <span>
              <span>{user?.following} </span> following
            </span>
          </div>
          <ul className="meta__list">
            <li className="meta__info">
              <img src={location} alt="location" height={16} width={16} className="icon" />
              {user?.location}
            </li>
            <li className="meta__info">
              <img src={link} alt="link" className="icon" />
              {user?.blog}
            </li>
            <li className="meta__info">
              <img src={twitter} alt="twitter" className="icon"/>
              @
              {user?.twitter_username}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default profile;
