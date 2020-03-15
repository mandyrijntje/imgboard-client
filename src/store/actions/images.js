import request from "superagent";
import { fetchUniqueUser } from "./user";

// const baseUrl = "https://warm-dusk-67488.herokuapp.com";
const baseUrl = "http://localhost:4000";

const allImages = payload => ({
  type: "ALL_IMAGES",
  payload
});

const newImage = payload => ({
  type: "NEW_IMAGE",
  payload
});

const removeImage = payload => ({
  type: "REMOVE_IMAGE",
  payload
});

const imagesByUser = payload => ({
  type: "IMAGES_BY_USER",
  payload
});

const updateImage = payload => ({
  type: "UPDATE_IMAGE",
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

export const createImage = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state;
  request
    .post(`${baseUrl}/images`)
    .set("Authorization", `Bearer ${user.auth}`)
    .send(data)
    .then(response => {
      console.log("response boy", response.body);
      const action = newImage(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const deleteImage = id => (dispatch, getState) => {
  const state = getState();
  const { user } = state;
  request
    .delete(`${baseUrl}/images`)
    .set("Authorization", `Bearer ${user.auth}`)
    .send({ id })
    .then(response => {
      if (response.body === 1) {
        const action = removeImage(id);
        dispatch(action);
      }
    });
};

export const getUserImages = id => async (dispatch, getState) => {
  const state = getState();
  if (!state.user.userDisplayed) {
    const response = await request.get(`${baseUrl}/users/${id}`);
    const action = fetchUniqueUser(response.body);
    dispatch(action);
  }
  const response = await request.get(`${baseUrl}/images/user/${id}`);
  const action = imagesByUser(response.body);
  dispatch(action);
};

export const editImage = (id, data) => (dispatch, getState) => {
  if (!data.url) {
    data = { title: data.title };
  } else if (!data.title) {
    data = { url: data.url };
  }
  console.log("data ?", data);

  request
    .put(`${baseUrl}/images/${id}`)
    .send(data)
    .then(response => {
      const action = updateImage(response.body);
      dispatch(action);
    });
};
