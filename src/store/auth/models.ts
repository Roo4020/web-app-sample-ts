export interface IauthState {
  videoId: string;
  referenceVideoId: string;
  lightMode: boolean;
  fullScreen: boolean;
}

export class AuthState implements IauthState {
  videoId = "";
  referenceVideoId = "";
  lightMode = false;
  fullScreen = false;
}
