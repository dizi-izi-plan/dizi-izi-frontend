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

export type RegistrationDataType = {
  email: string;
  password: string;
  re_password: string;
};

export type RegistrationResponseType = {
  id: string;
  email: string;
};

export type RegistrationError = {
  status: number;
  data: {
    email: string[];
  };
};
