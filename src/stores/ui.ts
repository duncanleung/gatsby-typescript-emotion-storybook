import { observable, action } from "mobx";

export default class ThemeStore {
  @observable
  isNavOpen = false;

  @action.bound
  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
