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
import { STEP4, FURNITURE, TSubsteps4, TRadioItem } from './step4FormData';
import { FURNITURE_NAMES_TYPE } from './step4FormData';
import { FormControlLabelImage } from './FormControlLabelImage';
import {
  AUTO_SELECTION,
  ERoomSize,
  ROOM_SIZES,
} from './autoFurnitureSelection';
import { Button } from '@mui/material';
import ArrowUp from '../../../../../../public/assets/icons/icon_arrow_up.svg';
import { ModalOneButton } from '@/components/Modal/ModalOneButton';
import ModalIcon from '../../../../../../public/assets/icons/modal_icon.svg';

const MODAL_TEXT = [
  'Размер комнаты не позволяет добавить больше позиций.',
  'Вы можете поменять размеры и количество на любом из пройденных этапов',
];

type FurnitureProps = {
  setValue: UseFormSetValue<SizesFormType>;
  watch: UseFormWatch<SizesFormType>;
  control: Control<SizesFormType>;
  isValid: boolean;
};

export const Furniture = ({ control, setValue }: FurnitureProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [scrollTop, setScrollTop] = useState<number | null>(null);
  const [isWardrobeSkipped, setWardrobeSkipped] = useState<boolean>(false);
  const [isOtherFurnitureSkipped, setOtherFurnitureSkipped] =
    useState<boolean>(false);

  const handleScroll = () => {
    setScrollTop(window.scrollY);
  };

  const allForm = useWatch({
    control,
  }) as SizesFormType;

  const substepStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    rowGap: '60px',
    columnGap: '30px',
  };

  const helpChooseFurniture = useCallback(
    (substeps: TSubsteps4[]) => {
      const roomArea =
        Number(allForm.walls.first) * Number(allForm.walls.second);

      if (roomArea > ROOM_SIZES.roomArea.L) {
        substeps.forEach((substep: TSubsteps4) => {
          setValue(
            STEP4[substep].name as FURNITURE_NAMES_TYPE,
            AUTO_SELECTION[ERoomSize.L][substep] as number | number[],
          );
        });
      } else if (roomArea > ROOM_SIZES.roomArea.M) {
        substeps.forEach((substep) => {
          setValue(
            STEP4[substep].name as FURNITURE_NAMES_TYPE,
            AUTO_SELECTION[ERoomSize.M][substep] as number | number[],
          );
        });
      } else {
        substeps.forEach((substep) => {
          setValue(
            STEP4[substep].name as FURNITURE_NAMES_TYPE,
            AUTO_SELECTION[ERoomSize.S][substep] as number | number[],
          );
        });
      }
    },
    [allForm.walls.first, allForm.walls.second, setValue],
  );

  const handleOnSkip = (
    substep: TSubsteps4,
    setSubstepSkipped: (boolean: boolean) => void,
  ) => {
    setSubstepSkipped(true);
    if (substep === FURNITURE.wardrobe) {
      setValue(STEP4[substep].name as FURNITURE_NAMES_TYPE, 0);
    } else {
      setValue(STEP4[substep].name as FURNITURE_NAMES_TYPE, []);
    }
  };

  const checkBedNumbers = (value: number) => {
    const newBed = STEP4[FURNITURE.bed].radioArr.find(
      (bed) => bed.id === value,
    );
    if (!newBed?.maxNumber) {
      setValue(FURNITURE.bedsNumber as FURNITURE_NAMES_TYPE, 1);
    }
  };

  const checkAllFurnitureArea = useCallback(
    (
      bedId: number | null,
      wardrobeId: number | null,
      otherId: number[] | null,
    ) => {
      const allowedArea =
        Number(allForm.walls.first) *
        Number(allForm.walls.second) *
        ROOM_SIZES.filledAreaPercent;

      const bedArea =
        getFurnitureArea(FURNITURE.bed, bedId || allForm.furniture.bed) *
          allForm.furniture.bedsNumber || 0;
      const wardrobeArea =
        getFurnitureArea(
          FURNITURE.wardrobe,
          wardrobeId || allForm.furniture.wardrobe,
        ) || 0;
      let otherArea;
      if (otherId?.length) {
        otherArea = otherId.reduce(
          (sum, current) => sum + getFurnitureArea(FURNITURE.other, current),
        );
      } else if (allForm.furniture.other.length) {
        otherArea = allForm.furniture.other.reduce(
          (sum, current) => sum + getFurnitureArea(FURNITURE.other, current),
        );
      } else {
        otherArea = 0;
      }

      const currentFurnitureArea = bedArea + wardrobeArea + otherArea;

      if (currentFurnitureArea <= allowedArea) return true;
      return false;
    },
    [
      allForm.furniture.bed,
      allForm.furniture.bedsNumber,
      allForm.furniture.other,
      allForm.furniture.wardrobe,
      allForm.walls.first,
      allForm.walls.second,
    ],
  );

  const handleRaioGroupChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;

    let bedId = null;
    let wardrobeId = null;

    if (name === FURNITURE.bed) {
      bedId = Number(value);
    } else {
      wardrobeId = Number(value);
    }

    const isEnoughSpaceForFurniture = checkAllFurnitureArea(
      bedId,
      wardrobeId,
      null,
    );

    if (isEnoughSpaceForFurniture) {
      setValue(name as FURNITURE_NAMES_TYPE, Number(value));
      if (name === FURNITURE.bed) checkBedNumbers(Number(value));
    } else {
      setModalOpen(true);
    }
  };

  const handleCheckboxChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = event.target as HTMLInputElement;

      if (checked) {
        if (allForm.furniture.other.includes(Number(name))) return;
        const newOtherFurniture = allForm.furniture.other;
        newOtherFurniture.push(Number(name));

        const isEnoughSpaceForFurniture = checkAllFurnitureArea(
          null,
          null,
          newOtherFurniture,
        );

        if (isEnoughSpaceForFurniture) {
          setValue(
            STEP4[FURNITURE.other].name as FURNITURE_NAMES_TYPE,
            newOtherFurniture,
          );
        } else {
          newOtherFurniture.pop();
          setValue(
            STEP4[FURNITURE.other].name as FURNITURE_NAMES_TYPE,
            newOtherFurniture,
          );
          setModalOpen(true);
        }
      } else {
        const newOtherFurniture = allForm.furniture.other.filter(
          (item) => item !== Number(name),
        );
        setValue(
          STEP4[FURNITURE.other].name as FURNITURE_NAMES_TYPE,
          newOtherFurniture,
        );
      }
    },
    [allForm.furniture.other, setValue, checkAllFurnitureArea],
  );

  const getFurnitureArea = (substep: TSubsteps4, id: number) => {
    const currentFurniture = STEP4[substep].radioArr.find(
      (el: TRadioItem) => el.id === id,
    );
    return (currentFurniture?.width ?? 0) * (currentFurniture?.length ?? 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setValue(FURNITURE.bed as FURNITURE_NAMES_TYPE, 0);
    setValue(FURNITURE.bedsNumber as FURNITURE_NAMES_TYPE, 1);
    setValue(FURNITURE.wardrobe as FURNITURE_NAMES_TYPE, 0);
    setWardrobeSkipped(false);
    setOtherFurnitureSkipped(false);
    setValue(FURNITURE.other as FURNITURE_NAMES_TYPE, []);
  }, [allForm.walls.first, allForm.walls.second, setValue]);

  return (
    <Stack position="relative" width="100%" alignItems="center" pb="66px">
      <Box position="absolute" top="-86px" right="0">
        <PopperMessage
          tip={'Dizi izi подберет мебель под параметры вашего помещения'}
        >
          <UnderlinedButton
            text="Автоматический подбор мебели"
            endIcon={<ArrowForwardIcon fontSize="small" />}
            onClick={() => {
              helpChooseFurniture([
                FURNITURE.bed,
                FURNITURE.wardrobe,
                FURNITURE.other,
              ]);
              window.scrollTo(0, window.innerHeight * 2);
            }}
          />
        </PopperMessage>
      </Box>
      <SubstepContainer
        title={STEP4[FURNITURE.bed].title}
        skipSubstep={STEP4[FURNITURE.bed].skipSubstep}
        control={control}
        handleChange={handleRaioGroupChange}
        number={
          STEP4[FURNITURE.bed].radioArr.find(
            (item) => item.id === allForm.furniture.bed,
          )?.maxNumber
        }
        handleOnHelp={() => helpChooseFurniture([FURNITURE.bed])}
      >
        <RadioGroupWrapper
          name={STEP4[FURNITURE.bed].name}
          control={control}
          onChange={handleRaioGroupChange}
          sx={{
            ...substepStyles,
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
      {allForm.furniture.bed !== 0 && (
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
              ...substepStyles,
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
      {(allForm.furniture.wardrobe !== 0 || isWardrobeSkipped) && (
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
              ...substepStyles,
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
                    checked={allForm.furniture.other.includes(item.id)}
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
      {allForm.furniture.bed !== 0 &&
        (allForm.furniture.wardrobe !== 0 || isWardrobeSkipped) &&
        (allForm.furniture.other.length !== 0 || isOtherFurnitureSkipped) && (
          <Button
            variant="default"
            color="secondary"
            sx={{ width: '390px', height: '64px', fontWeight: 500 }}
            type="submit"
          >
            Показать планировку
          </Button>
        )}
      <Button
        variant="default"
        color="primary"
        sx={{
          position: 'fixed',
          bottom: '100px',
          right: '100px',
          minHeight: '62px',
          minWidth: '62px',
          borderRadius: '50%',
          border: (theme) => `1px solid ${theme.palette.black.main}`,
          opacity: scrollTop && scrollTop > window.innerHeight ? 1 : 0,
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        disableRipple
      >
        <ArrowUp />
      </Button>
      <ModalOneButton
        text={MODAL_TEXT}
        isModalOpen={isModalOpen}
        handleConfirm={() => setModalOpen(false)}
        handleClose={() => setModalOpen(false)}
        icon={<ModalIcon width="75" height="126" />}
        nameButton={'Продолжить'}
      />
    </Stack>
  );
};
