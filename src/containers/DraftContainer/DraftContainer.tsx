import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { Box, Typography } from '@mui/material';
import { theme } from '@/mui/theme';
import { MenuOptionsDraft } from '@/components/Menu/MenuOptionsProjects/MenuOptionsDraft';
import DraftIcon from '../../../public/assets/icons/draftIcon.svg';




type DraftContainerProps = {

    id: number;
    date: string;
    handleDelete: (id: number) => void;
    handleContinue: (id: number) => void;
}

export const DraftContainer: FC<DraftContainerProps> = ({
    id,
    date,
    handleDelete,
    handleContinue
}) => {

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const handleConfirm = () => {
        router.push('/room-selection');
        setIsOpen(false);
    };



    return (
        <Stack
            height='244px'
            width='256px'
        >
            <Button
            
                variant='box'
                size="small"
                onClick={() => handleConfirm()}
                startIcon={
                    <DraftIcon />
                }
            >
            </Button>
            <Stack
                alignItems='start'
                padding='8px 12px'
                border={`1px solid ${theme.palette.primary.main}`}
            >
                <Typography
                    variant='body1'
                    color={'secondary.main'}
                    onClick={() => { }}
                    sx={{
                        cursor: 'pointer',
                        border: '1px solid transparent'
                    }}
                >
                    {'Черновик'}
                </Typography>
                <Box
                    width={'100%'}
                    display={'flex'}
                    alignItems={'center '}
                    justifyContent={'space-between'}
                >
                    <Typography
                        variant='overline'
                        color={'secondary.main'}
                        sx={{
                            opacity: '0.6'
                        }}
                    >
                        {date ? date : 'No Date'}
                    </Typography>

                    <MenuOptionsDraft
                        onDuplicate={() => handleContinue(id)}
                        onDelete={() => handleDelete(id)}
                    />

                </Box>

            </Stack>
        </Stack>
    );
};
