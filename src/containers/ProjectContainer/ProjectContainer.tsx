import {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { theme } from '@/mui/theme';
import { MenuOptionsProjects } from '@/components/Menu/MenuOptionsProjects/MenuOptionsProjects';
import { CLASS_NAMES_INPUT } from '@/components/Input/classNameConstants';

type ProjectsContainerProps = {
  id: number;
  name: string;
  date: string;
  image: React.ReactNode;
  handleDelete: (id: number) => void;
  handleDuplicate: (id: number) => void;
};

export const ProjectsContainer: FC<ProjectsContainerProps> = ({
  id,
  name,
  date,
  image,
  handleDelete,
  handleDuplicate,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [projectName, setProjectName] = useState(name);
  const [previousName, setPreviousName] = useState(name);

  const router = useRouter();

  const handleConfirm = () => {
    router.push('/room-measurements');
    setIsOpen(false);
  };

  const handleRename = () => {
    setIsEditing(true);
    console.log('Переименовать');
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleProjectNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 20) {
      setProjectName(event.target.value);
    }
  };
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
      setPreviousName(projectName || previousName);
      setProjectName(projectName || previousName);
    }
  };
  const handleBlur = () => {
    setIsEditing(false);
    setPreviousName(projectName || previousName);
    setProjectName(projectName || previousName);
  };

  return (
    <Stack height="244px" width="256px">
      <Button
        variant="box"
        size="small"
        onClick={() => handleConfirm()}
        startIcon={image}
      ></Button>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'start'}
        padding={'8px 12px'}
        border={`1px solid ${theme.palette.primary.main}`}
      >
        {isEditing ? (
          <TextField
            inputRef={inputRef}
            value={projectName}
            onChange={handleProjectNameChange}
            onKeyUp={handleKeyPress}
            className={CLASS_NAMES_INPUT.rename}
            onBlur={handleBlur}
          />
        ) : (
          <Typography
            variant="body1"
            color={'secondary.main'}
            onClick={() => handleConfirm()}
            sx={{
              cursor: 'pointer',
              border: '1px solid transparent',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              maxWidth: '230px',
            }}
          >
            {projectName || previousName}
          </Typography>
        )}
        <Box
          width={'100%'}
          display={'flex'}
          alignItems={'center '}
          justifyContent={'space-between'}
        >
          <Typography
            variant="overline"
            color={'secondary.main'}
            sx={{
              opacity: '0.6',
            }}
          >
            {date || 'No Date'}
          </Typography>

          <MenuOptionsProjects
            onRename={handleRename}
            onDuplicate={() => handleDuplicate(id)}
            onDelete={() => handleDelete(id)}
          />
        </Box>
      </Box>
    </Stack>
  );
};
