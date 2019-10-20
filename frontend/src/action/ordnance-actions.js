export const getAllOrdnances = project => store => {
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
