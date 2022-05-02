import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAsyncLogin } from "../features/dataSlice.js";
import logo from "../assets/logo.svg";

const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buttonLoading = useSelector((state) => state.data.buttonLoading);
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn);

  const loginUser = () => {
    const params = new URLSearchParams(window.location.search);
    let code = params.get("code");

    if (code) {
      dispatch(fetchAsyncLogin(code));
    }
  };
  useEffect(() => {
    loginUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoggedIn === true) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  if (isLoggedIn === true) {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  return (
    <div className="wrapper">
      <Button
        variant="success"
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`}
      >
        {buttonLoading ? (
          <span className="btn-padding">
            <i class="fa fa-spinner fa-pulse " aria-hidden="true"></i>{" "}
            loading...
          </span>
        ) : (
          <>
            <img
              src={logo}
              alt="downcaret"
              width={16}
              height={16}
              className="mr-3"
            />
            Login with Github
          </>
        )}
      </Button>
    </div>
  );
};

export default Index;
