import axios from "axios";

function sendRequest() {
  const axiosSettings = {
    headers: {
      "Content-Type": "application/json",
    },
    crossdomain: true,
    baseURL: process.env.VUE_APP_BASE_URL,
  };
  return axios.create(axiosSettings);
}

export const instance = sendRequest();
