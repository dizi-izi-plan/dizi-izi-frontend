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
    fn: () => {
      console.log('Сработало');
    },
  },
  {
    img: '../../../assets/icons/sendMailIcon.svg',
    title: 'Отправить на почту',
    fn: () => {
      console.log('Сработало');
    },
  },
  {
    img: '../../../assets/icons/saveProjectIcon.svg',
    title: 'Сохранить',
    fn: () => {
      console.log('Сработало');
    },
  },
];

export const getProjectButtons = (
  dispatch: Dispatch,
  toggleActionBlock: () => void,
): Array<ProjectButtons> => [
  {
    action: 'Попробовать еще',
    img: 'assets/icons/refresh.svg',
    alt: 'Refresh Icon',
    fn: () => dispatch(setCurrentModal(modalNames.modalTryAgain)),
  },
  {
    action: 'Новый проект',
    img: 'assets/icons/add.svg',
    alt: 'New Project Icon',
    fn: () => dispatch(setCurrentModal(modalNames.modalStartNewProject)),
  },
  {
    action: 'Удалить проект',
    img: 'assets/icons/delete.svg',
    alt: 'Delete Project Icon',
    fn: () => dispatch(setCurrentModal(modalNames.modalDeleteProject)),
  },
  {
    action: '',
    img: 'assets/icons/threeDots.svg',
    alt: 'More actions Icon',
    fn: () => toggleActionBlock(),
  },
];
