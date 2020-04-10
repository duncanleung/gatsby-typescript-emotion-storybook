import { observable, action } from "mobx";

export default class UIStore {
  @observable
  isNavOpen = false;

  @action.bound
  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
