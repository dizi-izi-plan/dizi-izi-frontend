import { RadioType } from '@/components/Input/RadioGroup/RadioGroupWrapper';
import { TO_WALL_RADIOS_EVEN, TO_WALL_RADIOS_UNEVEN } from '@/helpers/consts';
import { useMemo } from 'react';

export const useToWallRadios = (selectedWall: string) => {
  return useMemo((): RadioType[] => {
    if (selectedWall === 'walls.first' || selectedWall === 'walls.third') {
      return TO_WALL_RADIOS_EVEN;
    }
    return TO_WALL_RADIOS_UNEVEN;
  }, [selectedWall]);
};
