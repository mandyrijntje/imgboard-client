const initialState = {
  auth: "",
  createdUser: "",
  list: [],
  userDisplayed: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_JWT":
      return { ...state, auth: payload };
    case "NEW_USER":
      return { ...state, createdUser: payload };
    case "FETCH_USERS":
      return { ...state, list: payload };
    case "FETCH_UNIQUE_USER":
      return {
        ...state,
        userDisplayed: payload
      };
    default:
      return state;
  }
};
