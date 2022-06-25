
const createConfigSlice = (set, get) => ({  
  productAttributes: [],
  setProductAttributes: (payload) => set({ productAttributes: payload })
});

export default createConfigSlice;
