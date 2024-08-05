import { FC } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { theme } from '@/mui/theme';
import DraftIcon from '../../../public/assets/icons/draftIcon.svg';
import { MenuOptions } from '@/components/Menu/MenuOptionsProjects/MenuOptions';

type DraftContainerProps = {
  id: number;
  date: string;
  onOpenModal: (
    modalType: 'isOpenDelete' | 'isOpenContinue',
    id: number,
  ) => void;
};

export const DraftContainer: FC<DraftContainerProps> = ({
  id,
  date,
  onOpenModal,
}) => {
  const router = useRouter();
  const handleConfirm = () => {
    router.push('/room-selection');
  };

  const handleDelete = () => {
    onOpenModal('isOpenDelete', id);
  };

  const handleContinue = () => {
    onOpenModal('isOpenContinue', id);
  };
  return (
    <Stack height="244px" width="256px">
      <Button
        variant="box"
        size="small"
        onClick={() => handleConfirm()}
        startIcon={<DraftIcon />}
      />
      <Stack
        alignItems="start"
        padding="8px 12px"
        border={`1px solid ${theme.palette.primary.main}`}
      >
        <Typography
          variant="body1"
          color="secondary.main"
          onClick={() => handleConfirm()}
          sx={{
            cursor: 'pointer',
            border: '1px solid transparent',
          }}
        >
          {'Черновик'}
        </Typography>

        <Stack
          width="100%"
          flexDirection="row"
          alignItems="center "
          justifyContent="space-between"
        >
          <Typography
            variant="overline"
            color="secondary.main"
            sx={{
              opacity: '0.6',
            }}
          >
            {date || 'No Date'}
          </Typography>

          <MenuOptions
            actions={[
              {
                name: 'Продолжить',
                onClick: () => {
                  handleContinue();
                },
              },
              {
                name: 'Удалить',
                onClick: () => {
                  handleDelete();
                },
              },
            ]}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
