export interface ProjectNavbarProps {
  title: string;
}

export interface ProjectButtons {
  action: string;
  img: string;
  alt: string;
  fn: () => void;
}

export interface ModalConfigs {
  modalName: string;
  text: Array<string>;
  handleYes: () => void;
  handleNo: () => void;
}

export interface ActionConfigs {
  img: string;
  title: string;
  fn: () => void;
}
