import { Box, Button, Popover } from '@mui/material';
import Image from 'next/image';
import { MouseEvent } from 'react';
import ActionButton from '../Buttons/ActionButton/ActionButton';
import { actionConfigs } from '../ProjectNavbar/projectNavbar.data';

export interface ActionsMenuProps {
  isActionVisible: null | HTMLElement;
  setActionVisible: (value: null | HTMLElement) => void;
}

const ActionsMenu = ({
  isActionVisible,
  setActionVisible,
}: ActionsMenuProps) => {
  const actionClick = (event: MouseEvent<HTMLElement>) => {
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
          {actionConfigs.map(({ title, img, handleActionClick }) => (
            <ActionButton
              key={title}
              img={img}
              title={title}
              callback={handleActionClick}
            />
          ))}
        </Box>
      </Popover>
    </Box>
  );
};

export default ActionsMenu;
