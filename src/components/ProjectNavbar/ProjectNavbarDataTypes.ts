export interface ProjectButtons {
  action: string;
  img: string;
  alt: string;
  handleProjectAction: () => void;
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
  handleActionClick: () => void;
}
