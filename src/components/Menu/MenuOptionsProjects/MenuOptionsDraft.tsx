import React from 'react';
import { Box, Menu, MenuItem, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import { theme } from '@/mui/theme';

interface MenuOptionsDraftProps {
    onDuplicate: () => void;
    onDelete: () => void;
}
export const MenuOptionsDraft: React.FC<MenuOptionsDraftProps> = ({
    onDuplicate,
    onDelete
}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <Box
        >
            <IconButton
                aria-label="more"
                onClick={handleClick}
                sx={{
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'end'
                }}

            >
                <MoreHorizIcon 
                sx={{
                    color: ` ${theme.palette.secondary.light}`,
                    opacity:'0.6',
                }}
                    color="secondary"
                />
            </IconButton>
            <Menu
                elevation={0}

                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >

                <Box>

                    <MenuItem
                       
                        onClick={() => { onDuplicate(); handleClose(); }}
                    >
                        <Typography
                            variant='overline'
                        >
                            Продолжить
                        </Typography>

                    </MenuItem>
                    <MenuItem
                        onClick={() => { onDelete(); handleClose(); }}
                    >
                        <Typography
                            variant='overline'
                        >
                            Удалить
                        </Typography>

                    </MenuItem>
                </Box>

            </Menu>
        </Box>
    );
};

