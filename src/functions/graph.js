import * as api from "../api/graph";
export const readGraphData = async () => {
    try {
      const { data } = await api.readData();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  export const readDataById= async (dataId) => {
    try {
      const { data } = await api.readDataById(dataId);
      return data;
    } catch (error) {
      console.log(error);
    }
  };