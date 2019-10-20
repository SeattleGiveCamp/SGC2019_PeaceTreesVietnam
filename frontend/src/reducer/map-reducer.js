export default (state = {}, { type, payload }) => {
  switch (type) {
    case "GET_ALL_PROJECTS":
      return payload;
    default:
      return state;
  }
};
