import { ReactNode } from 'react';
export type textArrType = string[];

export interface ModalCommonTemplateProps {
  isModalOpen: boolean;
  text: textArrType;
  handleClose?: () => void;
  icon?: ReactNode;
  children?: ReactNode;
}

// пока не обязательные пропсы, чтобы не было ошибки,
// но, кроме закрытия при нажатии на каждую из кнопок,
// у них мб дополнительная логика в зависимости от места модалки
export interface ModalTwoButtonsProps extends ModalCommonTemplateProps {
  handleYes?: () => void;
  handleNo?: () => void;
  nameButtonYes: string;
  nameButtonNo: string;
}

export interface ModalOneButtonProps extends ModalCommonTemplateProps {
  handleConfirm?: () => void;
  nameButton: string;
}
