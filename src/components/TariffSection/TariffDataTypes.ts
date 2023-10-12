export type ActionsType = string[];

export type TariffInfo = {
  name: string;
  description?: string;
  actions?: ActionsType;
};

export type TariffType = {
  tariff: TariffInfo;
};
