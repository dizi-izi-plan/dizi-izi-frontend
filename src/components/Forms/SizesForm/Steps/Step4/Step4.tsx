import React, { useEffect, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SubstepContainer } from './SubstepContainer';
import { UnderlinedButton } from '@/components/Buttons/UnderlinedButton/UnderlinedButton';
import { PopperMessage } from '@/components/Popper/PopperMessage';
import { RadioGroupWrapper } from '@/components/Input/RadioGroup/RadioGroupWrapper';
import { SizesFormType } from '../../validation';
import {
  Control,
  UseFormSetValue,
  UseFormWatch,
  useWatch,
} from 'react-hook-form';
import { STEP4, FURNITURE } from './step4FormData';
import { RadioImage } from './RadioImage';
import { FURNITURE_NAMES_TYPE } from './step4FormData';

type FurnitureProps = {
  setValue: UseFormSetValue<SizesFormType>;
  watch: UseFormWatch<SizesFormType>;
  control: Control<SizesFormType>;
  isValid: boolean;
};

export const Furniture = ({ control, setValue }: FurnitureProps) => {
  const currentBed = useWatch({
    control,
    name: STEP4[0].name,
  });

  const currentBedsNumber = useWatch({
    control,
    name: FURNITURE.bedsNumber,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setValue(name as FURNITURE_NAMES_TYPE, Number(value));
  };

  console.log(currentBed, currentBedsNumber);
  useEffect(() => {
    // checking: only a single bed could have number 2
    if (
      currentBed !== STEP4[0].radioArr[STEP4[0].radioArr.length - 1].id &&
      currentBedsNumber !== 1
    ) {
      setValue(FURNITURE.bedsNumber as FURNITURE_NAMES_TYPE, 1);
    }
  }, [currentBed, setValue, currentBedsNumber]);

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
        control={control}
        handleChange={handleChange}
        number={
          STEP4[0].radioArr.find((item) => item.id === currentBed)?.maxNumber
        }
      >
        <RadioGroupWrapper
          name={STEP4[0].name}
          control={control}
          onChange={handleChange}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            rowGap: '60px',
            columnGap: '70px',
          }}
        >
          {STEP4[0].radioArr.map((item) => (
            <RadioImage key={item.id} data={item} />
          ))}
        </RadioGroupWrapper>
      </SubstepContainer>
      <SubstepContainer
        title={STEP4[1].title}
        skipSubstep={STEP4[1].skipSubstep}
        control={control}
        handleChange={handleChange}
      >
        <RadioGroupWrapper
          name={STEP4[1].name}
          control={control}
          onChange={handleChange}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            rowGap: '60px',
            columnGap: '70px',
          }}
        >
          {STEP4[1].radioArr.map((item) => (
            <RadioImage key={item.id} data={item} />
          ))}
        </RadioGroupWrapper>
      </SubstepContainer>
      <SubstepContainer
        title="Выберите мебель"
        skipSubstep={true}
        control={control}
        handleChange={handleChange}
      >
        <Typography variant="caption" color="secondary.main">
          Здесь будет другая мебель
        </Typography>
      </SubstepContainer>
    </Box>
  );
};
