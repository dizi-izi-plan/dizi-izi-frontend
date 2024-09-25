'use client';
import {
  ChangeEvent,
  KeyboardEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { theme } from '@/mui/theme';
import { CLASS_NAMES_INPUT } from '@/components/Input/classNameConstants';
import { MenuOptions } from '@/components/Menu/MenuOptionsProjects/MenuOptions';
import { modalNames } from '@/helpers/common-constants/modal-constants';
import { setCurrentModal } from '@/redux/slices/modal-slice';
import { useAppDispatch } from '@/redux/hooks';

type ProjectsContainerProps = {
  id: number;
  name: string;
  date: string;
  image: ReactNode;
  onOpenModal: (
    modalType: 'isOpenDelete' | 'isOpenDuplicate',
    id: number,
  ) => void;
};

export const ProjectsContainer = ({
  id,
  name,
  date,
  image,
  onOpenModal,
}: ProjectsContainerProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [projectName, setProjectName] = useState(name);
  const [previousName, setPreviousName] = useState(name);

  const handleConfirm = () => {
    router.push('/room-measurements');
  };

  const clickOnRename = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    onOpenModal('isOpenDelete', id);
  };

  const handleDuplicate = () => {
    onOpenModal('isOpenDuplicate', id);
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.selectionStart = inputRef.current.value.length;
    }
  }, [isEditing]);

  const handleProjectNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 20) {
      setProjectName(event.target.value);
    }
  };

  const closeEditing = () => {
    setIsEditing(false);
    setPreviousName(projectName || previousName);
    setProjectName(projectName || previousName);
  };
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      closeEditing();
    }
  };

  return (
    <Stack height="244px" width="256px">
      <Button
        variant="box"
        size="small"
        onClick={() => handleConfirm()}
        startIcon={image}
      ></Button>
      <Stack
        alignItems="start"
        padding="8px 12px"
        gap="4px"
        border={`1px solid ${theme.palette.primary.main}`}
      >
        <TextField
          inputRef={inputRef}
          value={projectName}
          onChange={handleProjectNameChange}
          onKeyUp={handleKeyPress}
          onClick={!isEditing ? () => handleConfirm() : () => {}}
          className={`${CLASS_NAMES_INPUT.rename}`}
          onBlur={closeEditing}
          disabled={!isEditing}
        />
        <Stack width="100%" flexDirection="row" justifyContent="space-between">
          <Typography
            variant="overline"
            color="secondary.main"
            sx={{
              opacity: '0.6',
            }}
          >
            {date || 'No Date'}
          </Typography>
          <MenuOptions
            actions={[
              {
                name: 'Переименовать',
                onClick: () => {
                  clickOnRename();
                },
              },
              {
                name: 'Дублировать',
                onClick: () => {
                  handleDuplicate();
                  dispatch(setCurrentModal(modalNames.modalTooMuchFurniture));
                },
              },
              {
                name: 'Удалить',
                onClick: () => {
                  handleDelete();
                  dispatch(setCurrentModal(modalNames.modalTooMuchFurniture));
                },
              },
            ]}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
