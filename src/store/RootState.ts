import { IauthState } from "./auth/models";
import { IcommonState } from "./common/models";

export interface RootState {
    auth: IauthState;
    common: IcommonState;
}