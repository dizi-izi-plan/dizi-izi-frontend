import { z } from 'zod';
import { CORRESPONDING_WALLS, DOOR_NAMES } from './formData';
import { ObjectValues } from '@/types/types';
import { SizesFormValidation } from './validation';

export type WALL_NUM = 'first' | 'second' | 'third' | 'forth';
export type WALLS_NAMES_TYPE = ObjectValues<typeof CORRESPONDING_WALLS>;
export type DOOR_NAMES_TYPE = ObjectValues<typeof DOOR_NAMES>;

export type SizesFormType = z.infer<typeof SizesFormValidation>;
