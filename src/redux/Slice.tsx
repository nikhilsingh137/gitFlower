import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IFooter,
  IHeader,
  IImage,
  IImageContent,
  IOnline,
  IProductRoute,
  IProductSelling,
  IShop,
  IShopSection,
  ISpecial,
} from "./Article";

export interface IType {
  isloading: boolean;
  headerData: Array<IHeader>;
  imageData: Array<IImageContent>;
  onlineData: Array<IOnline>;
  imagecontent: Array<IImage>;
  shopData: Array<IShop>;
  shopsectionData: Array<IShopSection>;
  productsellingData: Array<IProductSelling>;
  productRoute: Array<IProductRoute>;
  specialData: Array<ISpecial>;
  footerData: Array<IFooter>;
  error: boolean;
}

export const fetchHeader = createAsyncThunk("fetchHeader", async () => {
  const headerData = await fetch("http://localhost:4000/header");
  return headerData.json();
});
export const fetchImageContent = createAsyncThunk(
  "fetchImageContent",
  async () => {
    const imageData = await fetch("http://localhost:4000/imageContent");
    return imageData.json();
  }
);

export const fetchOnline = createAsyncThunk("fetchOnline", async () => {
  const onlineData = await fetch("http://localhost:4000/onlineData");
  return onlineData.json();
});

export const fetchImage = createAsyncThunk("fetchImage", async () => {
  const imagecontentData = await fetch("http://localhost:4000/image");
  return imagecontentData.json();
});

export const fetchShop = createAsyncThunk("fetchShop", async () => {
  const shopData = await fetch("http://localhost:4000/shop");
  return shopData.json();
});

export const fetchShopSection = createAsyncThunk(
  "fetchShopSection",
  async () => {
    const shopsectionData = await fetch("http://localhost:4000/shopsection");
    return shopsectionData.json();
  }
);

export const fetchProductSelling = createAsyncThunk(
  "fetchProductSelling",
  async () => {
    const productsellingData = await fetch(
      "http://localhost:4000/productSelling"
    );
    return productsellingData.json();
  }
);

export const fetchProductRoute = createAsyncThunk(
  "fetchProductRoute",
  async () => {
    const productRouteData = await fetch("http://localhost:4000/productRoute");
    return productRouteData.json();
  }
);

export const fetchSpecial = createAsyncThunk("fetchSpecial", async () => {
  const specialData = await fetch("http://localhost:4000/special");
  return specialData.json();
});

export const fetchFooter = createAsyncThunk("fetchFooter", async () => {
  const footerData = await fetch("http://localhost:4000/footer");
  return footerData.json();
});

export const initialState: IType = {
  isloading: false,
  headerData: [],
  imageData: [],
  onlineData: [],
  imagecontent: [],
  shopData: [],
  shopsectionData: [],
  productsellingData: [],
  productRoute: [],
  specialData: [],
  footerData: [],
  error: false,
};

const Slice = createSlice({
  name: "Api",
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchHeader.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(fetchHeader.fulfilled, (state, action) => {
      state.headerData = action.payload;
    });
    builder.addCase(fetchImageContent.fulfilled, (state, action) => {
      state.imageData = action.payload;
    });
    builder.addCase(fetchOnline.fulfilled, (state, action) => {
      state.onlineData = action.payload;
    });
    builder.addCase(fetchImage.fulfilled, (state, action) => {
      state.imagecontent = action.payload;
    });
    builder.addCase(fetchShop.fulfilled, (state, action) => {
      state.shopData = action.payload;
    });
    builder.addCase(fetchShopSection.fulfilled, (state, action) => {
      state.shopsectionData = action.payload;
    });
    builder.addCase(fetchProductSelling.fulfilled, (state, action) => {
      state.productsellingData = action.payload;
    });
    builder.addCase(fetchProductRoute.fulfilled, (state, action) => {
      state.productRoute = action.payload;
    });
    builder.addCase(fetchSpecial.fulfilled, (state, action) => {
      state.specialData = action.payload;
    });
    builder.addCase(fetchFooter.fulfilled, (state, action) => {
      state.footerData = action.payload;
    });
    builder.addCase(fetchHeader.rejected, (state, action) => {
      state.error = true;
    });
  },
  reducers: {},
});

export default Slice.reducer;
