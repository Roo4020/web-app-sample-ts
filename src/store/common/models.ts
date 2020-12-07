export interface IcommonState {
  selectedTab: Number;
}

export class CommonState implements IcommonState {
  selectedTab = 1;
}