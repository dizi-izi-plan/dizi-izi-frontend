import { Box, Button, Popover } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';
import { actionConfigs } from '../ProjectNavbar/projectNavbar.data';
import ActionButton from '../Buttons/ActionButton/ActionButton';

export interface ActionsMenuProps {
  isActionVisible: null | HTMLElement;
  setActionVisible: (value: null | HTMLElement) => void;
}

const ActionsMenu: FC<ActionsMenuProps> = ({
  isActionVisible,
  setActionVisible,
}) => {
  const actionClick = (event: React.MouseEvent<HTMLElement>) => {
    setActionVisible(event.currentTarget);
  };
  const actionClose = () => {
    setActionVisible(null);
  };
  const openAction = Boolean(isActionVisible);

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
        anchorEl={isActionVisible}
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
          {actionConfigs.map(({ title, img, callback }) => (
            <ActionButton
              key={title}
              img={img}
              title={title}
              callback={callback}
            />
          ))}
        </Box>
      </Popover>
    </Box>
  );
};

export default ActionsMenu;
