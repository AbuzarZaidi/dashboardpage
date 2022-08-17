import * as api from "../api/graph";
export const readGraphData = async () => {
    try {
      const { data } = await api.readData();
      return data;
    } catch (error) {
      console.log(error);
    }
  };