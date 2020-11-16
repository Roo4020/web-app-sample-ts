export interface IauthState {
  id: string;
  password: string;
}

export class AuthState implements IauthState {
  id = "";
  password = "";
}
