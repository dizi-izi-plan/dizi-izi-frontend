export type HHAreaResponse = {
  name: string;
  areas: HHAreaResponse[];
};

export type HHCountryResponse = {
  areas: HHAreaResponse[];
};
