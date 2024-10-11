import { modalNames } from '@/helpers/common-constants/modal-constants';
import {
  ActionConfigs,
  ModalConfigs,
  ProjectButtons,
} from './ProjectNavbarDataTypes';
import { setCurrentModal } from '@/redux/slices/modal-slice';
import { Dispatch } from '@reduxjs/toolkit';

export const modalConfigs: Array<ModalConfigs> = [
  {
    modalName: modalNames.modalTryAgain,
    text: ['Вы уверены, что хотите попробовать еще раз?'],
    handleYes: () => console.log('Yes'),
    handleNo: () => console.log('No'),
  },
  {
    modalName: modalNames.modalStartNewProject,
    text: ['Проект не сохранён. Продолжить?'],
    handleYes: () => console.log('Yes'),
    handleNo: () => console.log('No'),
  },
  {
    modalName: modalNames.modalDeleteProject,
    text: ['Вы уверены, что хотите удалить проект?'],
    handleYes: () => console.log('Yes'),
    handleNo: () => console.log('No'),
  },
];
export const actionConfigs: Array<ActionConfigs> = [
  {
    img: '../../../assets/icons/downloadPdfIcon.svg',
    title: 'Скачать в pdf',
    handleActionClick: () => {
      console.log('Сработало');
    },
  },
  {
    img: '../../../assets/icons/sendMailIcon.svg',
    title: 'Отправить на почту',
    handleActionClick: () => {
      console.log('Сработало');
    },
  },
  {
    img: '../../../assets/icons/saveProjectIcon.svg',
    title: 'Сохранить',
    handleActionClick: () => {
      console.log('Сработало');
    },
  },
];

export const getProjectButtons = (
  dispatch: Dispatch,
): Array<ProjectButtons> => [
  {
    action: 'Попробовать еще',
    img: 'assets/icons/refresh.svg',
    alt: 'Refresh Icon',
    handleProjectAction: () =>
      dispatch(setCurrentModal(modalNames.modalTryAgain)),
  },
  {
    action: 'Новый проект',
    img: 'assets/icons/add.svg',
    alt: 'New Project Icon',
    handleProjectAction: () =>
      dispatch(setCurrentModal(modalNames.modalStartNewProject)),
  },
  {
    action: 'Удалить проект',
    img: 'assets/icons/delete.svg',
    alt: 'Delete Project Icon',
    handleProjectAction: () =>
      dispatch(setCurrentModal(modalNames.modalDeleteProject)),
  },
];
