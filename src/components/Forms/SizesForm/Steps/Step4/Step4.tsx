import React, { useEffect, ChangeEvent, useCallback } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import Image from 'next/image';
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
import { FURNITURE_NAMES_TYPE } from './step4FormData';
import { FormControlLabelImage } from './FormControlLabelImage';

type FurnitureProps = {
  setValue: UseFormSetValue<SizesFormType>;
  watch: UseFormWatch<SizesFormType>;
  control: Control<SizesFormType>;
  isValid: boolean;
};

export const Furniture = ({ control, setValue }: FurnitureProps) => {
  const currentBed = useWatch({
    control,
    name: STEP4[FURNITURE.bed].name,
  });

  const currentBedsNumber = useWatch({
    control,
    name: FURNITURE.bedsNumber,
  });

  const currentWardrobe = useWatch({
    control,
    name: FURNITURE.wardrobe,
  });

  const currentOtherFurniture = useWatch({
    control,
    name: STEP4[FURNITURE.other].name,
  }) as number[];

  useEffect(() => {
    console.log(
      currentBed,
      currentBedsNumber,
      currentWardrobe,
      currentOtherFurniture,
    );
  }, [currentBed, currentBedsNumber, currentWardrobe, currentOtherFurniture]);

  const handleRaioGroupChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setValue(name as FURNITURE_NAMES_TYPE, Number(value));
  };

  const handleCheckboxChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = event.target as HTMLInputElement;
      if (checked) {
        if (currentOtherFurniture.includes(Number(name))) return;
        const newOtherFurniture = currentOtherFurniture;
        newOtherFurniture.push(Number(name));
        setValue(
          STEP4[FURNITURE.other].name as FURNITURE_NAMES_TYPE,
          newOtherFurniture,
        );
      } else {
        const newOtherFurniture = currentOtherFurniture.filter(
          (item) => item !== Number(name),
        );
        setValue(
          STEP4[FURNITURE.other].name as FURNITURE_NAMES_TYPE,
          newOtherFurniture,
        );
      }
    },
    [currentOtherFurniture, setValue],
  );

  const substepStules = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    rowGap: '60px',
    columnGap: '30px',
  };

  useEffect(() => {
    // checking: only a single bed could have number 2
    if (
      currentBed !==
        STEP4[FURNITURE.bed].radioArr[STEP4[FURNITURE.bed].radioArr.length - 1]
          .id &&
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
        title={STEP4[FURNITURE.bed].title}
        skipSubstep={STEP4[FURNITURE.bed].skipSubstep}
        control={control}
        handleChange={handleRaioGroupChange}
        number={
          STEP4[FURNITURE.bed].radioArr.find((item) => item.id === currentBed)
            ?.maxNumber
        }
      >
        <RadioGroupWrapper
          name={STEP4[FURNITURE.bed].name}
          control={control}
          onChange={handleRaioGroupChange}
          sx={{
            ...substepStules,
          }}
          className="radio-checkbox-image"
        >
          {STEP4[FURNITURE.bed].radioArr.map((item) => (
            <FormControlLabelImage
              key={item.id}
              label={item.name}
              value={item.id}
              control={
                <Radio
                  icon={
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      className={item.className}
                    />
                  }
                  checkedIcon={
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      className={item.className}
                    />
                  }
                  disableRipple
                />
              }
            />
          ))}
        </RadioGroupWrapper>
      </SubstepContainer>
      <SubstepContainer
        title={STEP4[FURNITURE.wardrobe].title}
        skipSubstep={STEP4[FURNITURE.wardrobe].skipSubstep}
        control={control}
        handleChange={handleRaioGroupChange}
      >
        <RadioGroupWrapper
          name={STEP4[FURNITURE.wardrobe].name}
          control={control}
          onChange={handleRaioGroupChange}
          sx={{
            ...substepStules,
          }}
        >
          {STEP4[FURNITURE.wardrobe].radioArr.map((item) => (
            <FormControlLabelImage
              key={item.id}
              label={item.name}
              value={item.id}
              control={
                <Radio
                  icon={
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      className={item.className}
                    />
                  }
                  checkedIcon={
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      className={item.className}
                    />
                  }
                  disableRipple
                />
              }
            />
          ))}
        </RadioGroupWrapper>
      </SubstepContainer>
      <SubstepContainer
        title={STEP4[FURNITURE.other].title}
        skipSubstep={STEP4[FURNITURE.other].skipSubstep}
        control={control}
        handleChange={handleRaioGroupChange}
      >
        <Stack
          sx={{
            ...substepStules,
          }}
        >
          {STEP4[FURNITURE.other].radioArr.map((item) => (
            <FormControlLabelImage
              key={item.id}
              label={item.name}
              value={item.id}
              control={
                <Checkbox
                  name={String(item.id)}
                  onChange={handleCheckboxChange}
                  icon={
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      className={item.className}
                    />
                  }
                  checkedIcon={
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      className={item.className}
                    />
                  }
                  disableRipple
                />
              }
            />
          ))}
        </Stack>
      </SubstepContainer>
    </Box>
  );
};
