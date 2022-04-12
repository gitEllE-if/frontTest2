import axios from "axios";
import { eventHub } from "@/plugins/EventHub";

function sendRequest() {
  const axiosSettings = {
    headers: {
      "Content-Type": "application/json",
    },
    crossdomain: true,
    baseURL: process.env.VUE_APP_BASE_URL,
  };
  const axiosInstance = axios.create(axiosSettings);
  axiosInstance.interceptors.request.use(
    (conf) => {
      eventHub.$emit("beforeRequest");
      return conf;
    },
    (error) => {
      eventHub.$emit("requestError");
      return Promise.reject(error);
    }
  );
  axiosInstance.interceptors.response.use(
    (response) => {
      eventHub.$emit("afterResponse");
      return response;
    },
    (error) => {
      eventHub.$emit("responseError");
      return Promise.reject(error);
    }
  );
  return axiosInstance;
}

export const instance = sendRequest();
