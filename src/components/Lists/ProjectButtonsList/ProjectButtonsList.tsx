import React, { useState } from 'react';
import ProjectButton from '../../Buttons/ProjectButton/ProjectButton';
import { getProjectButtons } from '../../ProjectNavbar/projectNavbar.data';
import { useAppDispatch } from '@/redux/hooks';
import { Box } from '@mui/material';
import ActionsMenu from '../../ActionsMenu/ActionsMenu';

const ProjectButtonsList = () => {
  const dispatch = useAppDispatch();

  const projectButtons = getProjectButtons(dispatch);
  const [isActionVisible, setActionVisible] = useState<null | HTMLElement>(
    null,
  );

  return (
    <Box display="flex" flexDirection="row" gap="10px">
      {projectButtons.map(({ action, img, alt, callback }) => (
        <ProjectButton
          key={action}
          action={action}
          img={img}
          alt={alt}
          callback={callback}
        />
      ))}
      <ActionsMenu
        isActionVisible={isActionVisible}
        setActionVisible={setActionVisible}
      />
    </Box>
  );
};

export default ProjectButtonsList;
