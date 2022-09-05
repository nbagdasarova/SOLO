export class _Home {
  constructor(appJs) {
    this.appJs = appJs;
  }

  // top menu
  getMenuItems() {
    let menuList = this.appJs.headerBar.map((obj) => {
      return `<li><a>${obj}</a></li>`;
    });

    return menuList.join("");
  }

  // second menu

  getBottomMenu() {
    let menuList = this.appJs.headerMenu.map((obj) => {
      return `<li><a>${obj}</a></li>`;
    });

    return menuList.join("");
  }

  // checkbox city-s

  getCityList() {
    let filterList = this.appJs.cityCheckbox.map((obj) => {
      return ` <label><input type="checkbox" class="checkbox" value="${obj}"> ${obj}</label></br>`;
    });

    return filterList.join("");
  }

  // radioBtnList

  getRangeList() {
    let filterList = this.appJs.priceRange.map((obj) => {
      return `<label><input type="radio" class="radio" value="${obj.from}"> ${obj.from}-${obj.to}</label></br>
      `;
    });

    return filterList.join("");
  }

  //   chechbox constructionType

  getconstructionType() {
    let filterList = this.appJs.constructionType.map((obj) => {
      return `<label><input type="checkbox" value="${obj}"> ${obj}</label></br>`;
    });

    return filterList.join("");
  }

  setDynamictems(id, value) {
    let elem = document.getElementById(id);
    elem.innerHTML = value;
  }
  render() {
    this.setDynamictems("top-menu", this.getMenuItems());
    this.setDynamictems("bottom-menu-id", this.getBottomMenu());
    this.setDynamictems("checkboxId", this.getCityList());
    this.setDynamictems("radio-btn", this.getRangeList());
    this.setDynamictems("constructionType", this.getconstructionType());
  }
}
