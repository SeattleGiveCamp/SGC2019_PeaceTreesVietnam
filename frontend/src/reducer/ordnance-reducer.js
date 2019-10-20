export default (state = {}, { type, payload }) => {
  switch (type) {
    case "GET_ORDNANCES":
      return state;
    case "SET_ORDNANCES":
      return payload;
    default:
      return state;
  }
};
