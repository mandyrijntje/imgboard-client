const initialState = {
  list: [],
  listByUser: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ALL_IMAGES":
      return { ...state, list: payload };
    case "NEW_IMAGE":
      return { ...state, list: [payload, ...state.list] };
    case "REMOVE_IMAGE":
      return { ...state, list: state.filter(image => image.id !== payload) };
    case "IMAGES_BY_USER":
      return { ...state, listByUser: payload };
    case "UPDATE_IMAGE":
      return {
        ...state,
        list: state.map(image => (image.id === payload.id ? payload : image))
      };

    default:
      return state;
  }
};
