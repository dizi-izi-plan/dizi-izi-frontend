import { ModalDataProps } from './ProjectNavbarDataTypes';

export const modalData: { [key: string]: ModalDataProps } = {
  tryAgain: {
    text: ['Вы уверены, что хотите попробовать еще раз?'],
    handleYes: () => console.log('Try Again: Yes'),
  },
  newProject: {
    text: ['Проект не сохранен. Продолжить?'],
    handleYes: () => console.log('New Project: Yes'),
  },
  deleteProject: {
    text: ['Вы уверены, что хотите удалить проект?'],
    handleYes: () => console.log('Delete Project: Yes'),
  },
  moreActions: {
    text: ['Что вы хотите сделать дальше?'],
    handleYes: () => console.log('More Actions: Yes'),
  },
};
