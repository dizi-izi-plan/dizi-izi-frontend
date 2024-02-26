import React, { useEffect, ChangeEvent, useCallback, useState } from 'react';
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
import { STEP4, FURNITURE, TSubsteps4 } from './step4FormData';
import { FURNITURE_NAMES_TYPE } from './step4FormData';
import { FormControlLabelImage } from './FormControlLabelImage';
import { WALLS } from '../../formData';
import { autoSelection, ERoomSize } from './autoFurnitureSelection';
import { Button } from '@mui/material';

type FurnitureProps = {
  setValue: UseFormSetValue<SizesFormType>;
  watch: UseFormWatch<SizesFormType>;
  control: Control<SizesFormType>;
  isValid: boolean;
};

export const Furniture = ({ control, setValue }: FurnitureProps) => {
  const [isWardrobeSkipped, setWardrobeSkipped] = useState<boolean>(false);
  const [isOtherFurnitureSkipped, setOtherFurnitureSkipped] =
    useState<boolean>(false);

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

  const verticalWall = useWatch({
    control,
    name: WALLS.first,
  }) as number;

  const horizontalWall = useWatch({
    control,
    name: WALLS.second,
  }) as number;

  const helpChooseFurniture = useCallback(
    (substeps: TSubsteps4[]) => {
      const roomArea = verticalWall * horizontalWall;

      if (roomArea > 16000000) {
        substeps.forEach((substep: TSubsteps4) => {
          setValue(
            STEP4[substep].name as FURNITURE_NAMES_TYPE,
            autoSelection[ERoomSize.L][substep],
          );
        });
      } else if (roomArea > 12000000) {
        substeps.forEach((substep) => {
          setValue(
            STEP4[substep].name as FURNITURE_NAMES_TYPE,
            autoSelection[ERoomSize.M][substep],
          );
        });
      } else {
        substeps.forEach((substep) => {
          setValue(
            STEP4[substep].name as FURNITURE_NAMES_TYPE,
            autoSelection[ERoomSize.S][substep],
          );
        });
      }
    },
    [verticalWall, horizontalWall, setValue],
  );

  const handleOnSkip = (
    substep: TSubsteps4,
    setSubstepSkipped: (boolean: boolean) => void,
  ) => {
    setSubstepSkipped(true);
    if (substep === FURNITURE.wardrobe) {
      setValue(STEP4[substep].name as FURNITURE_NAMES_TYPE, 0);
    } else {
      setValue(STEP4[substep].name as FURNITURE_NAMES_TYPE, [0]);
    }
  };

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
    <Stack position="relative" width="100%" alignItems="center" pb="66px">
      <Box position="absolute" top="-86px" right="0">
        <PopperMessage
          tip={'Dizi izi подберет мебель под параметры вашего помещения'}
        >
          <UnderlinedButton
            text="Автоматический подбор мебели"
            endIcon={<ArrowForwardIcon fontSize="small" />}
            onClick={() =>
              helpChooseFurniture([
                FURNITURE.bed,
                FURNITURE.wardrobe,
                FURNITURE.other,
              ])
            }
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
        handleOnHelp={() => helpChooseFurniture([FURNITURE.bed])}
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
      {Number(currentBed) !== 0 && (
        <SubstepContainer
          title={STEP4[FURNITURE.wardrobe].title}
          skipSubstep={STEP4[FURNITURE.wardrobe].skipSubstep}
          control={control}
          handleChange={handleRaioGroupChange}
          handleOnHelp={() => helpChooseFurniture([FURNITURE.wardrobe])}
          handleOnSkip={() =>
            handleOnSkip(FURNITURE.wardrobe, setWardrobeSkipped)
          }
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
      )}
      {(Number(currentWardrobe) !== 0 || isWardrobeSkipped) && (
        <SubstepContainer
          title={STEP4[FURNITURE.other].title}
          skipSubstep={STEP4[FURNITURE.other].skipSubstep}
          control={control}
          handleChange={handleRaioGroupChange}
          handleOnHelp={() => helpChooseFurniture([FURNITURE.other])}
          handleOnSkip={() =>
            handleOnSkip(FURNITURE.other, setOtherFurnitureSkipped)
          }
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
                lableMinHeight="52px"
                control={
                  <Checkbox
                    name={String(item.id)}
                    onChange={handleCheckboxChange}
                    checked={currentOtherFurniture.includes(item.id)}
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
      )}
      {Number(currentBed) !== 0 &&
        (Number(currentWardrobe) !== 0 || isWardrobeSkipped) &&
        (currentOtherFurniture.length !== 0 || isOtherFurnitureSkipped) && (
          <Button
            variant="default"
            color="secondary"
            sx={{ width: '390px', height: '64px', fontWeight: 500 }}
            type="submit"
          >
            Показать планировку
          </Button>
        )}
    </Stack>
  );
};
