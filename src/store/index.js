import { configureStore } from '@reduxjs/toolkit';
import graph from './graph'
const store = configureStore({
    reducer: {  graphData:graph},
  });
  
  export default store;