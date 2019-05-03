export const getWalmartProductIds =  () => {
  return fetch(`${process.env.API_URL}`)
    .then(res=> res.json());
};


