export interface ImodalState {
    state: Boolean;
    path: String;
}

export class ModalState implements ImodalState {
    state = false;
    path = "";
}
