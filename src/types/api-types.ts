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

export type registrationDataType = {
  email: string;
  password: string;
  re_password: string;
};

export type registrationResponseType = {
  id: string;
  email: string;
};
