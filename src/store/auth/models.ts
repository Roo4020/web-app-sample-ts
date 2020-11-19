export interface IauthState {
  user: object;
  state: Boolean;
}

export class AuthState implements IauthState {
  user = {};
  state = false;
}
