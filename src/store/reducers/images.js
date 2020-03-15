const initialState = {
  list: [],
  listByUser: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ALL_IMAGES":
      return { ...state, list: payload };

    default:
      return state;
  }
};
