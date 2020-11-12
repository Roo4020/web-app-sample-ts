export interface IcommonState {
  selectedTab: number
}

export class CommonState implements IcommonState {
  selectedTab = 1;
}