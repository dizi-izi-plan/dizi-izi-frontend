import { Box, Button, Popover } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { actionConfigs } from '../ProjectNavbar/projectNavbar.data';
import ActionButton from '../ActionButton/ActionButton';
import { ActionsMenuProps } from './ActionsMenuDataTypes';

const ActionsMenu: React.FC<ActionsMenuProps> = ({
  actionVisible,
  setActionVisible,
}) => {
  const actionClick = (event: React.MouseEvent<HTMLElement>) => {
    setActionVisible(event.currentTarget);
  };
  const actionClose = () => {
    setActionVisible(null);
  };
  const openAction = Boolean(actionVisible);

  return (
    <Box>
      <Button
        variant="empty"
        onClick={actionClick}
        sx={{
          minWidth: '24px',
          padding: '0.2rem',
        }}
      >
        <Image
          src="assets/icons/threeDots.svg"
          alt="More actions Icon"
          width={24}
          height={24}
        />
      </Button>
      <Popover
        open={openAction}
        anchorEl={actionVisible}
        onClose={actionClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          bgcolor="#DEDEDE"
          padding="5px"
          gap="10px"
        >
          {actionConfigs.map((config) => (
            <ActionButton
              key={config.title}
              img={config.img}
              title={config.title}
              fn={config.fn}
            />
          ))}
        </Box>
      </Popover>
    </Box>
  );
};

export default ActionsMenu;
