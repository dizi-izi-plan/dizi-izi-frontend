import { Typography, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SubstepContainer } from './SubstepContainer';
import { UnderlinedButton } from '@/components/Buttons/UnderlinedButton/UnderlinedButton';
import { PopperMessage } from '@/components/Popper/PopperMessage';

// type FurnitureProps = {
//   setValue: UseFormSetValue<SizesFormType>;
//   watch: UseFormWatch<SizesFormType>;
//   control: Control<SizesFormType>;
//   isValid: boolean;
// };

export const Furniture = () => {
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
      <SubstepContainer title="Выберите кровать">
        <Typography variant="caption" color="secondary.main">
          Здесь будут кровати
        </Typography>
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
