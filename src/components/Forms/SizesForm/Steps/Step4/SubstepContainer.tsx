import { ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { UnderlinedButton } from '@/components/Buttons/UnderlinedButton/UnderlinedButton';
import { PopperMessage } from '@/components/Popper/PopperMessage';

type SubstepContainerProps = {
  title: string;
  children: ReactNode;
  skipSubstep: boolean;
};

export const SubstepContainer = ({
  title,
  children,
  skipSubstep,
}: SubstepContainerProps) => {
  return (
    <Stack rowGap={5} padding="35px 0px">
      <Stack direction="row" columnGap={5} alignItems="center">
        <Typography variant="h2" color="secondary.main" whiteSpace="nowrap">
          {title}
        </Typography>
        <UnderlinedButton text="Помощь в выборе" />
        {skipSubstep && (
          <PopperMessage tip={'Продолжить без выбора'}>
            <UnderlinedButton text="Пропустить шаг" />
          </PopperMessage>
        )}
      </Stack>
      {children}
    </Stack>
  );
};
