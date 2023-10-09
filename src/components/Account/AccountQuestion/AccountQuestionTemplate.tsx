import { useRouter } from 'next/navigation';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type AccountQuestionTemplateProps = {
  question: string;
  nameButtonYes: string;
  handleYes: () => void;
  routePush: string;
  nameButtonNo: string;
  handleNo?: () => void;
};

export const AccountQuestionTemplate = ({
  question,
  nameButtonYes,
  handleYes,
  routePush,
  nameButtonNo,
  handleNo,
}: AccountQuestionTemplateProps) => {
  const router = useRouter();

  return (
    <Stack rowGap="44px" pt="17%" pl="22%" maxWidth="max-content">
      <Typography
        variant="body2"
        sx={{
          fontWeight: '400',
          lineHeight: '144.687%',
          letterSpacing: '0.09px',
        }}
      >
        {question}
      </Typography>
      <Stack direction="row" columnGap="44px" alignSelf="center">
        <Button
          variant="default"
          sx={{ color: 'black.main' }}
          size="small"
          onClick={() => {
            handleYes();
            router.push(routePush);
          }}
        >
          {nameButtonYes}
        </Button>
        <Button
          variant="default"
          sx={{ color: 'black.main' }}
          size="small"
          onClick={() => {
            handleNo?.();
            router.back();
          }}
        >
          {nameButtonNo}
        </Button>
      </Stack>
    </Stack>
  );
};
