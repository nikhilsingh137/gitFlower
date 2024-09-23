import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IAboutFlorist,
  IAboutGoal,
  IAboutImage,
  IAboutJourney,
  IAboutTeam,
  IConatctForm,
  IConatctImage,
  IContactAction,
  IContactTab,
  ICustomer,
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
  customerData: Array<ICustomer>;
  footerData: Array<IFooter>;
  contactImageData: Array<IConatctImage>;
  contactFormData: Array<IConatctForm>;
  contactTab: Array<IContactTab>;
  contactActionData: Array<IContactAction>;
  aboutImageData: Array<IAboutImage>;
  aboutFloristData: Array<IAboutFlorist>;
  aboutGoalData: Array<IAboutGoal>;
  aboutJourneyData: Array<IAboutJourney>;
  aboutTeamData: Array<IAboutTeam>;
  error: boolean;
}

export const fetchHeader = createAsyncThunk("fetchHeader", async () => {
  const headerData = await fetch(
    "https://nikhilsingh137.github.io/React_data/flower/header.json"
  );
  return headerData.json();
});
export const fetchImageContent = createAsyncThunk(
  "fetchImageContent",
  async () => {
    const imageData = await fetch(
      "https://nikhilsingh137.github.io/React_data/flower/image.json"
    );
    return imageData.json();
  }
);

export const fetchOnline = createAsyncThunk("fetchOnline", async () => {
  const onlineData = await fetch(
    "https://nikhilsingh137.github.io/React_data/flower/online.json"
  );
  return onlineData.json();
});

export const fetchImage = createAsyncThunk("fetchImage", async () => {
  const imagecontentData = await fetch(
    "https://nikhilsingh137.github.io/React_data/flower/imagecontent.json"
  );
  return imagecontentData.json();
});

export const fetchShop = createAsyncThunk("fetchShop", async () => {
  const shopData = await fetch(
    "https://nikhilsingh137.github.io/React_data/flower/shop.json"
  );
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
  const specialData = await fetch(
    "https://nikhilsingh137.github.io/React_data/flower/special.json"
  );
  return specialData.json();
});

export const fetchCustomer = createAsyncThunk("fetchCustomer", async () => {
  const customerData = await fetch(
    "https://nikhilsingh137.github.io/React_data/flower/customer.json"
  );
  return customerData.json();
});

export const fetchFooter = createAsyncThunk("fetchFooter", async () => {
  const footerData = await fetch(
    "https://nikhilsingh137.github.io/React_data/flower/footer.json"
  );
  return footerData.json();
});

export const fetchContactImage = createAsyncThunk(
  "fetchContactImage",
  async () => {
    const contactImageData = await fetch("http://localhost:4000/contactImage");
    return contactImageData.json();
  }
);

export const fetchContactForm = createAsyncThunk(
  "fetchContactForm",
  async () => {
    const contactFormData = await fetch("http://localhost:4000/contactForm");
    return contactFormData.json();
  }
);

export const fetchContactTab = createAsyncThunk("fetchContactTab", async () => {
  const contactTabData = await fetch("http://localhost:4000/contactTab");
  return contactTabData.json();
});

export const fetchContactAction = createAsyncThunk(
  "fetchContactAction",
  async () => {
    const contactActionData = await fetch(
      "http://localhost:4000/contactAction"
    );
    return contactActionData.json();
  }
);

export const fetchAboutImage = createAsyncThunk("fetchAboutImage", async () => {
  const aboutImageData = await fetch("http://localhost:4000/aboutImage");
  return aboutImageData.json();
});

export const fetchAboutFlorist = createAsyncThunk(
  "fetchAboutFlorist",
  async () => {
    const aboutFloristData = await fetch("http://localhost:4000/aboutFlorist");
    return aboutFloristData.json();
  }
);

export const fetchAboutGoal = createAsyncThunk("fetchAboutGoal", async () => {
  const aboutGoalData = await fetch("http://localhost:4000/aboutGoal");
  return aboutGoalData.json();
});

export const fetchAboutJourney = createAsyncThunk(
  "fetchAboutJourney",
  async () => {
    const aboutJourneyData = await fetch(
      "https://nikhilsingh137.github.io/React_data/flower/journey.json"
    );
    return aboutJourneyData.json();
  }
);

export const fetchAboutTeam = createAsyncThunk("fetchAboutTeam", async () => {
  const aboutTeamData = await fetch("http://localhost:4000/aboutTeam");
  return aboutTeamData.json();
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
  customerData: [],
  footerData: [],
  contactImageData: [],
  contactFormData: [],
  contactTab: [],
  contactActionData: [],
  aboutImageData: [],
  aboutFloristData: [],
  aboutGoalData: [],
  aboutJourneyData: [],
  aboutTeamData: [],
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
    builder.addCase(fetchCustomer.fulfilled, (state, action) => {
      state.customerData = action.payload;
    });
    builder.addCase(fetchFooter.fulfilled, (state, action) => {
      state.footerData = action.payload;
    });
    builder.addCase(fetchContactImage.fulfilled, (state, action) => {
      state.contactImageData = action.payload;
    });
    builder.addCase(fetchContactForm.fulfilled, (state, action) => {
      state.contactFormData = action.payload;
    });
    builder.addCase(fetchContactTab.fulfilled, (state, action) => {
      state.contactTab = action.payload;
    });
    builder.addCase(fetchContactAction.fulfilled, (state, action) => {
      state.contactActionData = action.payload;
    });
    builder.addCase(fetchAboutImage.fulfilled, (state, action) => {
      state.aboutImageData = action.payload;
    });
    builder.addCase(fetchAboutFlorist.fulfilled, (state, action) => {
      state.aboutFloristData = action.payload;
    });
    builder.addCase(fetchAboutGoal.fulfilled, (state, action) => {
      state.aboutGoalData = action.payload;
    });
    builder.addCase(fetchAboutJourney.fulfilled, (state, action) => {
      state.aboutJourneyData = action.payload;
    });
    builder.addCase(fetchAboutTeam.fulfilled, (state, action) => {
      state.aboutTeamData = action.payload;
    });
    builder.addCase(fetchHeader.rejected, (state, action) => {
      state.error = true;
    });
  },
  reducers: {},
});

export default Slice.reducer;
