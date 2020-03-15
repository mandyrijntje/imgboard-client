import request from "superagent";
// import { fetchUniqueUser } from "./user";

// const baseUrl = "https://mysterious-sierra-32170.herokuapp.com/";
const baseUrl = "http://localhost:4000";

const allImages = payload => ({
  type: "ALL_IMAGES",
  payload
});



export const getImages = () => (dispatch, getState) => {
  const state = getState();
  const { images } = state;

  if (!images.length) {
    request(`${baseUrl}/images`)
      .then(response => {
        const action = allImages(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

