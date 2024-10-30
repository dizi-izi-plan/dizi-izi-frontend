export const MIN_DISTANCE_TO_WALL = 50;
export const MIN_DISTANCE_BETWEEN_WINDOWS = 40;

export const ERROR_MESSAGES = {
  required: 'Обязательное поле',
  toWallRequired: 'Поле "До стены" обязательное',
  minWallsSizes: 'Длина стены не может быть меньше 1000мм',
  doorSizes: 'Размер двери не может быть меньше 700мм и больше 900мм',
  minWindowSize: 'Размер окна не может быть меньше 400мм',
  minWindowWithBalconySize: 'Размер окна не может быть меньше 700мм',
  maxWindowSize:
    'Размер окна + расстояние до стены не может быть больше размера выбранной стены',
  minDistanceToWall: 'Расстояние до стены не может быть меньше 50мм',
  maxDistanceToWall: 'Расстояние до стены слишком большое',
  maxWindowAmount: 'Количество окон не может превышать 2шт',
  windowsSameWallSize:
    'Размеры окон не могут быть больше размера выбранной стены. Минимальное расстояние между окнами - 40мм',
};
