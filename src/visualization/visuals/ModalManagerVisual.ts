declare class ModalManagerVisual {
  constructor(opts?: { hideSiblingNodes?: boolean; handleContainerOverflow?: boolean });
  add(modal: any, container: any): number;
  remove(modal: any): void;
  isTopModal(modal: any): boolean;
}

export default ModalManagerVisual;
