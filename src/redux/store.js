import { configureStore } from "@reduxjs/toolkit";
import taskSlider from "./features/task/taskSlider";

const store = configureStore({
  reducer: {
    tasks: taskSlider,
  },
});

export default store;
