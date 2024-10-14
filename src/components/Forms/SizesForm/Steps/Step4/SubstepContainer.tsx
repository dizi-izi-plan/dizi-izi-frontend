import { ReactNode, ChangeEvent } from 'react';
import Stack, { StackProps } from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { UnderlinedButton } from '@/components/Buttons/UnderlinedButton/UnderlinedButton';
import { PopperMessage } from '@/components/Popper/PopperMessage';
import { RadioGroupWrapper } from '@/components/Input/RadioGroup/RadioGroupWrapper';
import { RadioNumber } from './RadioNumber';
import { FURNITURE } from './step4FormData';
import { SizesFormType } from '../../types';
import { Control } from 'react-hook-form';

type SubstepContainerProps = StackProps & {
  title: string;
  children: ReactNode;
  skipSubstep: boolean;
  control: Control<SizesFormType>;
  number?: number | undefined;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleOnHelp: () => void;
  handleOnSkip?: () => void;
};

export const SubstepContainer = ({
  title,
  children,
  skipSubstep,
  control,
  handleChange,
  number,
  handleOnHelp,
  handleOnSkip,
}: SubstepContainerProps) => {
  return (
    <Stack rowGap={5} padding="35px 0px" width="100%">
      <Stack direction="row" columnGap={5} alignItems="center">
        <Typography variant="h2" color="secondary.main" whiteSpace="nowrap">
          {title}
        </Typography>
        <UnderlinedButton text="Помощь в выборе" onClick={handleOnHelp} />
        {skipSubstep && (
          <PopperMessage tip={'Продолжить без выбора'}>
            <UnderlinedButton text="Пропустить шаг" onClick={handleOnSkip} />
          </PopperMessage>
        )}
      </Stack>
      {children}
      <Stack
        direction="row"
        alignItems="center"
        columnGap="40px"
        minHeight="47px"
        sx={{
          opacity: number && number > 1 ? 1 : 0,
          transition: 'opacity 0.3s linear',
        }}
      >
        <Typography variant="body1" color="second.main">
          Выберите количество
        </Typography>
        <RadioGroupWrapper
          name={FURNITURE.bedsNumber}
          control={control}
          onChange={handleChange}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            columnGap: '13px',
          }}
        >
          {number &&
            [...new Array(number)].map((item, index) => (
              <RadioNumber key={index} value={index + 1} />
            ))}
        </RadioGroupWrapper>
      </Stack>
    </Stack>
  );
};
