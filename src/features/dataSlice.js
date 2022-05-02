import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getItemFromLocalStorage, setItemToLocalStorage } from "../utils.js";

export const fetchAsyncLogin = createAsyncThunk(
  "auth/fetchAsyncLogin",
  async (code) => {
    let data;

    await fetch(`http://localhost:20219/authenticate`, {
      method: "POST",
      body: JSON.stringify({ code: code }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "Bad credentials") {
          data = null;
        }
        data = result;
      })
      .catch((error) => {
        return error;
      });

    return {
      data,
    };
  }
);

export const fetchAsyncRepoList = createAsyncThunk(
  "repo/fetchAsyncRepoList",
  async () => {
    let data;
    let user = getItemFromLocalStorage("user");

    await fetch(user?.repos_url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        data = result;
      })
      .catch((error) => {
        return error;
      });

    return {
      data,
    };
  }
);

const initialState = {
  isLoggedIn: false,
  user: null,
  repos: [],
  pageLoading: false,
  buttonLoading: false,
};

const dataSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserLogout: (state) => {
      localStorage.clear();
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [fetchAsyncLogin.pending]: (state) => {
      console.log("Pending");
      return { ...state, buttonLoading: true };
    },
    [fetchAsyncLogin.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      setItemToLocalStorage("user", payload.data);
      setItemToLocalStorage("isLoggedIn", true);

      return {
        ...state,
        user: payload.data,
        isLoggedIn: true,
        buttonLoading: false,
      };
    },
    [fetchAsyncLogin.rejected]: (state) => {
      console.log("Rejected!");
      return { ...state, buttonLoading: false };
    },
    [fetchAsyncRepoList.pending]: (state) => {
      console.log("Pending");
      return { ...state, pageLoading: true };
    },
    [fetchAsyncRepoList.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");

      return { ...state, repos: payload.data, pageLoading: false };
    },
    [fetchAsyncRepoList.rejected]: (state) => {
      console.log("Rejected!");
      return { ...state, pageLoading: false };
    },
  },
});
export const { setUserLogout } = dataSlice.actions;
export default dataSlice.reducer;
