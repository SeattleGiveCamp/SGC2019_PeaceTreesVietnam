import superagent from "superagent";

const API_URL = process.env.REACT_APP_API_KEY || "http://138.68.241.63:3001";
console.log(API_URL);

export const addProject = project => store => {
  // Once we get a DB, it will connect here
  return superagent
    .post(`${API_URL}/Project`)
    .send(project)
    .set("Accept", "application/json")
    .then(response => {
      // Returns data and stores to state after making the update
      return store.dispatch(get(response.data));
    });
};

export const get = projects => ({
  type: "GET_ALL_PROJECTS",
  payload: projects
});

export const getAllProjects = () => store => {
  // Once we get a DB, it will connect here.
  return superagent.get(`${API_URL}/Project`).then(response => {
    return store.dispatch(get(response.body));
  });
};

export const updateProject = (newData, oldData) => store => {
  // Once we get a DB, it will connect here
  return superagent
    .post(`${API_URL}/Project`)
    .send(newData)
    .set("Accept", "application/json")
    .then(response => {
      // Returns data and stores to state after making the update
      return store.dispatch(get(response.data));
    });
};

export const deleteProject = project => store => {
  // Once we get a DB, it will connect here
  return superagent
    .delete(`${API_URL}/Project:${project.id}`)
    .then(response => {
      return store.dispatch(get(response.data));
    });
};
