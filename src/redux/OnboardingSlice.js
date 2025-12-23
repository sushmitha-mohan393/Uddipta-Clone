import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onboarded: false,
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    completeOnboarding: (state) => {
      state.onboarded = true;
    },
    resetOnboarding: (state) => {
      state.onboarded = false;
    },
  },
});

export const { completeOnboarding, resetOnboarding } = onboardingSlice.actions;
export default onboardingSlice.reducer;
