import { createSlice } from "@reduxjs/toolkit";
const initialGraphState = { lineGraph: {}, insights: [], heading: "",lineChartResponse:{} };
const graphSlice = createSlice({
  name: "cart",
  initialState: initialGraphState,
  reducers: {
    setLineGraphHandler(state, action) {
      state.lineGraph = action.payload;
    },
    setinsightsHandler(state, action) {
      state.insights = action.payload;
    },
    setHeadingHandler(state, action) {
      state.heading = action.payload;
    },
    setResponseHandler(state, action) {
        state.lineChartResponse = action.payload;
      },
  },
});
export const { setLineGraphHandler, setinsightsHandler,setHeadingHandler,setResponseHandler } = graphSlice.actions;
export default graphSlice.reducer;
