import { IauthState } from "./auth/models";
import { IcanvasState } from "./canvas/models";
import { IcommonState } from "./common/models";
import { ImodalState } from "./modal/models";

export interface RootState {
    auth: IauthState;
    canvas: IcanvasState;
    common: IcommonState;
    modal: ImodalState;
}