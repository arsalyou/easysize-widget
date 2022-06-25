import create from "zustand";
import { devtools } from "zustand/middleware";
import config from "./store";
let useStore;
if (process.env.NODE_ENV === "production") {
  useStore = create((set, get) => ({
    ...config(set, get),
   
  }));
} else {
  useStore = create(
    devtools((set, get) => ({
      ...config(set, get),
     
    }))
  );
}
export default useStore;
