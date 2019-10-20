export default (state = {}, { type, payload }) => {
  switch (type) {
    case "GET_ALL_PROJECTS":
      return state;
    case "ADD_PROJECT":
      return state;
    case "UPLOAD_ORDNANCES":
      return state;
    case "EDIT_PROJECT":
      return state;
    case "DELETE_PROJECT":
      let newState = [...state];
      newState.filter(trip => trip._id !== payload);
      return newState;
    default:
      return state;
  }
};
