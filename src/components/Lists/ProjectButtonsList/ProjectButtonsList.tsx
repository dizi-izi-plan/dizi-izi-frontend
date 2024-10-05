import { useAppDispatch } from '@/redux/hooks';
import { Box } from '@mui/material';
import { useState } from 'react';
import ActionsMenu from '../../ActionsMenu/ActionsMenu';
import ProjectButton from '../../Buttons/ProjectButton/ProjectButton';
import { getProjectButtons } from '../../ProjectNavbar/projectNavbar.data';

const ProjectButtonsList = () => {
  const dispatch = useAppDispatch();

  const projectButtons = getProjectButtons(dispatch);
  const [isActionVisible, setActionVisible] = useState<null | HTMLElement>(
    null,
  );

  return (
    <Box display="flex" flexDirection="row" gap="10px">
      {projectButtons.map(({ action, img, alt, handleProjectAction }) => (
        <ProjectButton
          key={action}
          action={action}
          img={img}
          alt={alt}
          callback={handleProjectAction}
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
