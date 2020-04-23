import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-52-91-26-189.compute-1.amazonaws.com:8080/",
  responseType: "json"
});