import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncRepoList } from "../features/dataSlice.js";
import star from "../assets/star.svg";
import { calculateRelativeDate } from "../utils.js";

const Repolist = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.data.repos);

  useEffect(() => {
    dispatch(fetchAsyncRepoList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {(repos || [])?.slice(0, 20).map((item, index) => {
        return (
          <>
            <div className="repo__row" key={index}>
              <div className="left__content">
                <div className="top__row">
                  <a href="/" className="name">
                    {item.name}
                  </a>{" "}
                  <span className="repo__visibility">{item.visibility} </span>
                </div>
                <div className="desc">{item.description} </div>
                <div className="bottom__row">
                  {item.language === "JavaScript" && (
                    <span>
                      <span
                        className="language"
                        style={{ backgroundColor: "#f1e05a" }}
                      ></span>
                      <span className="item">{item.language}</span>
                    </span>
                  )}
                  {item.language === "HTML" && (
                    <span>
                      <span
                        className="language"
                        style={{ backgroundColor: "#e34c26" }}
                      ></span>
                      <span className="item">{item.language}</span>
                    </span>
                  )}

                  {item.language === "CSS" && (
                    <span>
                      <span
                        className="language"
                        style={{ backgroundColor: "#563d7c" }}
                      ></span>
                      <span className="item">{item.language}</span>
                    </span>
                  )}

                  {item.language === "Vue" && (
                    <span>
                      <span
                        className="language"
                        style={{ backgroundColor: "#2c3e50" }}
                      ></span>
                      <span className="item">{item.language}</span>
                    </span>
                  )}

                  {item.stargazers_count > 0 && (
                    <span>
                      <span>{item.stargazers_count}</span>
                      <img src={star} alt="" />
                    </span>
                  )}

                  <span className="item">
                    {calculateRelativeDate(item.updated_at)}
                  </span>
                </div>
              </div>

              <div className="right__content">
                <button className="star">
                  <img src={star} alt="star" /> <span>Star</span>
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default Repolist;
