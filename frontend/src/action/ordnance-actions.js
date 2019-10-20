export const getAllOrdnances = project => store => {
  if (!project) {
    const mockData = [
      { lon: 107.09051, lat: 16.80226 },
      { lon: 107.20795, lat: 16.78502 },
      { lon: 106.69846, lat: 16.4833 },
      { lon: 106.70714, lat: 16.47587 },
      { lon: 106.59757, lat: 16.62858 },
      { lon: 105.80243, lat: 17.93222 },
      { lon: 107.03979, lat: 16.61595 },
      { lon: 106.73213, lat: 16.61735 },
      { lon: 106.7308, lat: 16.60778 },
      { lon: 106.64908, lat: 16.60386 },
      { lon: 106.67816, lat: 16.60527 },
      { lon: 106.6851, lat: 16.65624 },
      { lon: 106.86088, lat: 16.62411 },
      { lon: 106.71974, lat: 16.43421 },
      { lon: 106.77618, lat: 16.70745 },
      { lon: 106.98058, lat: 16.81562 },
      { lon: 107.26998, lat: 16.74843 },
      { lon: 107.05308, lat: 17.0539 },
      { lon: 107.10622, lat: 16.98865 },
      { lon: 107.1763, lat: 16.9022 },
      { lon: 106.71097, lat: 16.66309 },
      { lon: 106.62976, lat: 16.60358 },
      { lon: 106.70233, lat: 16.48551 },
      { lon: 106.59748, lat: 16.62862 },
      { lon: 107.01436, lat: 16.63233 },
      { lon: 107.20796, lat: 16.7841 },
      { lon: 106.90014, lat: 16.68451 },
      { lon: 107.01038, lat: 16.63247 },
      { lon: 107.08987, lat: 16.80228 },
      { lon: 107.01128, lat: 16.63096 },
      { lon: 107.09105, lat: 16.80204 },
      { lon: 106.71271, lat: 16.6657 },
      { lon: 106.85105, lat: 16.74314 },
      { lon: 106.8781, lat: 16.71025 },
      { lon: 106.90372, lat: 16.67756 },
      { lon: 106.71302, lat: 16.66488 },
      { lon: 106.70882, lat: 16.606 }
    ];
    return store.dispatch(setAllOrdnances(mockData));
  }
  // API CALL TO GET ORDNANCES FROM DB
  // return superagent.get(`${API_URL}/getAllOrdnances`).then(response => {
  //   return store.dispatch(setAllOrdnances(response.data));
  // });
};

export const setAllOrdnances = data => ({
  type: "SET_ORDNANCES",
  payload: data
});

export const postOrdnanceData = data => store => {
  return store.dispatch(setAllOrdnances(data));
  // superagent.get(`${API_URL}/postOrdnance`).then(response => {
  //   return store.dispatch(setAllOrdnances(response.data))
  // })
};
