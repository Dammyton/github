import React from "react";
import packageImg from "../assets/package.svg";
import project from "../assets/project.svg";
import repoImg from "../assets/repo.svg";
import book from "../assets/book.svg";
import star from "../assets/star.svg";
import downcaret from "../assets/down-caret.svg";
import RepositoryList from "./repolist.js";
import { useSelector } from "react-redux";
import Skeletonloader from "./skeletonloader.js";

const Repo = ({ user }) => {
  const pageLoading = useSelector((state) => state.data.pageLoading);

  return (
    <>
      {pageLoading ? (
        <Skeletonloader />
      ) : (
        <div className="container">
          <div className="tabs">
            <div className="temp__container">
              <div className="temp__info" id="temp-info">
                <img id="temp-thumbnail" alt="" className="temp__thumbnail" />
                <span id="temp-username" className="temp__username"></span>
              </div>
            </div>
            <div className="tab__list">
              <div className="tab overview">
                <img className="tab__icons" src={book} alt="book" />
                <span>Overview</span>
              </div>
              <div className="tab repos">
                <img className="tab__icons" src={repoImg} alt="repo" />
                <span>Repositories</span>
                <span className="counter">{user?.public_repos} </span>
              </div>
              <div className="tab">
                <img className="tab__icons" src={project} alt="project" />
                <span>Projects</span>
              </div>
              <div className="tab">
                <img
                  className="tab__icons"
                  src={packageImg}
                  height={16}
                  width={16}
                  alt="package"
                />
                <span>Packages</span>
              </div>
              <div className="tab ">
                <img className="tab__icons" src={star} alt="start" />
                <span>Stars</span>
                <span className="counter">{11} </span>
              </div>
            </div>
          </div>

          {/* REPO_LIST - START  */}
          <div className="repos">
            <div className="repos__content">
              <div className="repos__form">
                <form className="search__form">
                  <input
                    type="search"
                    className="search__input"
                    placeholder="Find a repository..."
                  />
                </form>

                <div className="repos__buttons">
                  <div className="filter__buttons">
                    <button className="repos__btn">
                      <span>Type</span>
                      <img src={downcaret} alt="downcaret" />
                    </button>
                    <button className="repos__btn">
                      <span>Language</span>
                      <img src={downcaret} alt="downcaret" />
                    </button>
                    <button className="repos__btn">
                      <span>Sort</span>
                      <img src={downcaret} alt="downcaret" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="repo__parent" id="repo-container">
                <RepositoryList />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Repo;
