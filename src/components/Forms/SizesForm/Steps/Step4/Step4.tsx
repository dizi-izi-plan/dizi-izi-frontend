import React, { ChangeEvent } from 'react';
import Box from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SubstepContainer } from './SubstepContainer';
import { UnderlinedButton } from '@/components/Buttons/UnderlinedButton/UnderlinedButton';
import { PopperMessage } from '@/components/Popper/PopperMessage';
import { RadioGroupWrapper } from '@/components/Input/RadioGroup/RadioGroupWrapper';
import { SizesFormType } from '../../validation';
import { Control, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { STEP4 } from './step4FormData';
import { RadioImage } from './RadioImage';
import { FURNITURE_NAMES_TYPE } from './step4FormData';

type FurnitureProps = {
  setValue: UseFormSetValue<SizesFormType>;
  watch: UseFormWatch<SizesFormType>;
  control: Control<SizesFormType>;
  isValid: boolean;
};

export const Furniture = ({ control, setValue }: FurnitureProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setValue(name as FURNITURE_NAMES_TYPE, Number(value));
  };

  return (
    <Box position="relative" width="100%">
      <Box position="absolute" top="-86px" right="0">
        <PopperMessage
          tip={'Dizi izi подберет мебель под параметры вашего помещения'}
        >
          <UnderlinedButton
            text="Автоматический подбор мебели"
            endIcon={<ArrowForwardIcon fontSize="small" />}
          />
        </PopperMessage>
      </Box>
      <SubstepContainer
        title={STEP4[0].title}
        skipSubstep={STEP4[0].skipSubstep}
      >
        <RadioGroupWrapper
          name={STEP4[0].name}
          control={control}
          onChange={handleChange}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {STEP4[0].radioArr.map((item) => (
            <RadioImage key={item.id} data={item} />
          ))}
        </RadioGroupWrapper>
      </SubstepContainer>
      <SubstepContainer title="Выберите шкаф" skipSubstep={true}>
        <Typography variant="caption" color="secondary.main">
          Здесь будут шкафы
        </Typography>
      </SubstepContainer>
      <SubstepContainer title="Выберите мебель" skipSubstep={true}>
        <Typography variant="caption" color="secondary.main">
          Здесь будет другая мебель
        </Typography>
      </SubstepContainer>
    </Box>
  );
};
