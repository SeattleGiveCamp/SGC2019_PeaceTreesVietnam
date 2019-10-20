import superagent from "superagent";

const API_URL = process.env.REACT_APP_API_KEY;

export const getAllProjects = project => ({
  type: "ADD_PROJECT",
  payload: project
});
