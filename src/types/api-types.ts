export type HHAreaResponse = {
  name: string;
  areas: HHAreaResponse[];
};

export type HHCountryResponse = {
  areas: HHAreaResponse[];
};

export type TLoginError = {
  code: string;
  data: {
    non_field_errors: string[];
  };
  attr: string;
};
