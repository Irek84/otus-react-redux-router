import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';

const pageNameSlice = createSlice({
  name: 'pageName',
  initialState: {
    value: "Главная"
  },
  reducers: {
    setPageName: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { setPageName } = pageNameSlice.actions;
export const selectPageName = (state: RootState) => state.pageName.value;

export default pageNameSlice.reducer;