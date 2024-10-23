import { WALLS } from '@/components/Forms/SizesForm/formData';
import { RadioType } from '@/components/Input/RadioGroup/RadioGroupWrapper';

export const TO_WALL_RADIOS_EVEN: RadioType[] = [
  {
    label: 'До стены 2',
    value: WALLS.second,
  },
  { label: 'До стены 4', value: WALLS.forth },
];

export const TO_WALL_RADIOS_UNEVEN: RadioType[] = [
  { label: 'До стены 1', value: WALLS.first },
  {
    label: 'До стены 3',
    value: WALLS.third,
  },
];
