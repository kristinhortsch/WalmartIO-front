export const getWalmartProductIds =  () => {
  return fetch(`${process.env.API_URL}/productIds`)
    .then(res=> res.json());
};

export const getOldProduct =  (id) => {
  return fetch(`${process.env.API_URL}/${id}`)
    .then(res=> res.json());
};




