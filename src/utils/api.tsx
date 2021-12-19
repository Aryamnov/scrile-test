export const BASE_URL = "https://jsonplaceholder.typicode.com";

const handleResponse = (response: any) =>
  response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`);

export const getUsers = () => {
  return fetch(`${BASE_URL}/users`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(handleResponse);
};

export const getPhotos = () => {
  return fetch(`${BASE_URL}/photos`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(handleResponse);
};

export const getAllinfo = () => {
  return Promise.all([getUsers(), getPhotos()]);
};
