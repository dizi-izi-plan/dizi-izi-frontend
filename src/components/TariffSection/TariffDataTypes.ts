type TariffInfo = {
  name: string;
  description?: string;
  actions?: string[];
};

export type TariffType = {
  tariff: TariffInfo;
};
