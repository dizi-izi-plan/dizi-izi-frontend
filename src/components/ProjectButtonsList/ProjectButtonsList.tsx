import React, { useState } from 'react';
import ProjectButton from '../Buttons/ProjectButton/ProjectButton';
import { getProjectButtons } from '../ProjectNavbar/projectNavbar.data';
import { useAppDispatch } from '@/redux/hooks';
import { Box } from '@mui/material';
import ActionsMenu from '../ActionsMenu/ActionsMenu';

const ProjectButtonsList = () => {
  const dispatch = useAppDispatch();

  const projectButtons = getProjectButtons(dispatch);
  const [actionVisible, setActionVisible] = useState<null | HTMLElement>(null);

  return (
    <Box display="flex" flexDirection="row" gap="10px">
      {projectButtons.map((button) => (
        <ProjectButton
          key={button.action}
          action={button.action}
          img={button.img}
          alt={button.alt}
          fn={button.fn}
        />
      ))}
      <ActionsMenu
        actionVisible={actionVisible}
        setActionVisible={setActionVisible}
      />
    </Box>
  );
};

export default ProjectButtonsList;
