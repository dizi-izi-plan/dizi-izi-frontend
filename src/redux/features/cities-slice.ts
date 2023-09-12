import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type ErrorName = {
  type: string;
};

type RequestError = {
  errors: ErrorName;
};

type AreaResponse = {
  name: string;
  areas: AreaResponse[];
};

type CountryResponse = {
  areas: AreaResponse[];
};

export const fetchCities = createAsyncThunk(
  'cities/fetchCities',
  async (): Promise<string[] | string> => {
    try {
      const res = await fetch('https://api.hh.ru/areas/113');
      const data: CountryResponse = await res.json();

      const cities: string[] = [];
      data.areas.forEach((region) => {
        for (const city of region.areas) {
          cities.push(city.name);
        }
      });
      return cities;
    } catch (err: unknown) {
      const error = err as RequestError;
      return error.errors.type;
    }
  },
);

export type CitiesState = {
  citiesNames: string[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: CitiesState = {
  citiesNames: [],
  loading: 'idle',
  error: null,
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCities.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.payload;
    });
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      state.citiesNames = action.payload;
      state.loading = 'succeeded';
      state.error = null;
    });
  },
});

export const citiesReducer = citiesSlice.reducer;
