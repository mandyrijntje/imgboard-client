import request from "superagent";

// const baseUrl = "https://warm-dusk-67488.herokuapp.com";
const baseUrl = "http://localhost:4000";

export const getJwt = jwt => ({
  type: "GET_JWT",
  payload: jwt
});

export const newUser = payload => ({
  type: "NEW_USER",
  payload
});

export const fetchUsers = users => ({
  type: "FETCH_USERS",
  payload: users
});

export const fetchUniqueUser = user => ({
  type: "FETCH_UNIQUE_USER",
  payload: user
});

export const login = (mail, pass) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email: mail, password: pass })
    .then(response => {
      const action = getJwt(response.body.jwt);
      dispatch(action);
    })
    .catch(error => console.log(error));
};

export const createUser = data => dispatch => {
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      const action = newUser(response.body.email);
      dispatch(action);
    });
};

export const getUsers = () => dispatch => {
  request
    .get(`${baseUrl}/users`)
    .then(response => {
      const action = fetchUsers(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const getUniqueUser = id => dispatch => {
  request.get(`${baseUrl}/users/${id}`).then(response => {
    const action = fetchUniqueUser(response.body);
    dispatch(action);
  });
};
