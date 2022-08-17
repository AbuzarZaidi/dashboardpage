import axios from "axios";
const url = "http://staging.api.instaandon.com/andon/api/v1/matrix/?type=graph";
export const readData = () => axios.get(url);
export const readDataById = (dataId) => axios.get(`url?id=${dataId}`);
