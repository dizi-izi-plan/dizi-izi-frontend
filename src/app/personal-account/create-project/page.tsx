'use client';

import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { PageContainer } from '@/containers/PageContainer/PageContainer';
import { ArrowBackButton } from '@/components/ArrowBackButton/ArrowBackButton';
import ModalIcon from '../../../../public/assets/icons/modal_icon.svg';

const CreateProject = () => {
  return (
    <PageContainer color="black">
      <Stack direction="column" alignItems="center" rowGap="149px" width="100%">
        <ArrowBackButton />

        <Stack alignItems="center">
          <Stack
            direction="row"
            columnGap="31px"
            sx={{
              padding: '0px 16px 16px 16px',
              border: '1px solid ',
              borderColor: 'primary.main',
              maxWidth: '591px',
            }}
            mb="44px"
          >
            <Box>
              <ModalIcon width="41px" height="69px" />
            </Box>

            <Box mt="16px">
              <Typography variant="body2" mb="16px">
                Генеририуемые планировки носят исключительно рекомендательный
                характер.
              </Typography>
              <Typography variant="body1">
                Dizi_izi напоминает, что ремонтные работы, лучше выполнять с
                профильными специалистами.
              </Typography>
            </Box>
          </Stack>

          <Link href="/personal-account/room-selection">
            <Button variant="default" size="medium" color="secondary">
              Начать
            </Button>
          </Link>
        </Stack>
      </Stack>
    </PageContainer>
  );
};

export default CreateProject;
