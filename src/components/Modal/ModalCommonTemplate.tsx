import { InfoModal } from '@/components/InfoModal';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ModalCommonTemplateProps } from './ModalTypes';

const MODAL_MINWIDTH = '275px';

export const ModalCommonTemplate = ({
  isModalOpen,
  text,
  handleClose,
  icon,
  children,
}: ModalCommonTemplateProps) => {
  return (
    isModalOpen && (
      <InfoModal
        minWidth={MODAL_MINWIDTH}
        open={isModalOpen}
        onClose={handleClose}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '680px',
            minHeight: '250px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            backgroundColor: 'secondary.contrastText',
            padding: '24px 80px',
          }}
        >
          <Stack rowGap="16px">
            <Stack direction="row" columnGap="21px" alignItems="center">
              {icon}
              <Stack rowGap="20px">
                {text.map((part, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    color="black.main"
                    maxWidth="425px"
                    whiteSpace="pre-line"
                  >
                    {part}
                  </Typography>
                ))}
              </Stack>
            </Stack>
            <Stack
              direction="row"
              columnGap="24px"
              alignItems="center"
              justifyContent="center"
            >
              {children}
            </Stack>
          </Stack>
        </Box>
      </InfoModal>
    )
  );
};
