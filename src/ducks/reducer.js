import axios from "axios";

const initialState = {
  user: {
    username: "",
    id: 0,
    profile_pic: ""
  }
};

const UPDATE_STATE = "UPDATE_USER";
const GET_POSTS = "GET_POSTS";

export function updateState(userObj) {
  return {
    type: UPDATE_STATE,
    payload: userObj
  };
}

export const getPosts = () => {
  const data = axios.get("/api/posts").then(res => res.data);
  return {
    type: GET_POSTS,
    payload: data
  };
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_STATE:
      return { ...state, user: payload };
    default:
      return state;
  }
}
