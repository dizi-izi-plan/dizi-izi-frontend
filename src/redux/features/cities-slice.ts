import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type CityOption = {
  value: string;
  label: string;
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
  async (): Promise<CityOption[]> => {
    const res = await fetch('https://api.hh.ru/areas/113');
    const data: CountryResponse = await res.json();

    const cities: CityOption[] = [];
    data.areas.forEach((region) => {
      for (const city of region.areas) {
        const newOption: CityOption = {
          value: city.name,
          label: city.name,
        };
        cities.push(newOption);
      }
    });
    return cities;
  },
);

export type CitiesState = {
  entities: CityOption[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: CitiesState = {
  entities: [],
  loading: 'idle',
  error: null,
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCities.rejected, (state) => {
      state.loading = 'failed';
      state.error = 'something was wrong';
    });
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = 'succeeded';
      state.error = null;
    });
  },
});

export const citiesReducer = citiesSlice.reducer;
