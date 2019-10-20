import superagent from "superagent";

const API_URL = process.env.REACT_APP_API_KEY;

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
  const MOCK_DATA = [
    {
      projectName: "Project 1",
      projectStatus: "Complete",
      location: "Somewhere, Someplace",
      latitude: "123.456789",
      longitude: "123.456789",
      projectType: "Kindergarten",
      description: "text here",
      sponsors: "people",
      dedicatedTo: "person",
      completedYear: "2031",
      plantedYear: "2050",
      imageUrl: "link",
      pageUrl: "link",
      id: 1
    },
    {
      projectName: "Project 2",
      projectStatus: "Complete",
      location: "Somewhere, Someplace",
      latitude: "123.456789",
      longitude: "123.456789",
      projectType: "Kindergarten",
      description: "text here",
      sponsors: "people",
      dedicatedTo: "person",
      completedYear: "2031",
      plantedYear: "2050",
      imageUrl: "link",
      pageUrl: "link",
      id: 2
    },
    {
      projectName: "Project 3",
      projectStatus: "Complete",
      location: "Somewhere, Someplace",
      latitude: "123.456789",
      longitude: "123.456789",
      projectType: "Kindergarten",
      description: "text here",
      sponsors: "people",
      dedicatedTo: "person",
      completedYear: "2031",
      plantedYear: "2050",
      imageUrl: "link",
      pageUrl: "link",
      id: 3
    },
    {
      projectName: "Project 4",
      projectStatus: "Complete",
      location: "Somewhere, Someplace",
      latitude: "123.456789",
      longitude: "123.456789",
      projectType: "Kindergarten",
      description: "text here",
      sponsors: "people",
      dedicatedTo: "person",
      completedYear: "2031",
      plantedYear: "2050",
      imageUrl: "link",
      pageUrl: "link",
      id: 4
    }
  ];

  // Using fake data for now
  return store.dispatch(get(MOCK_DATA));

  // Once we get a DB, it will connect here.
  // return superagent.get(`${API_URL}/Project`).then(response => {
  //   return store.dispatch(get(response.data));
  // });
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
