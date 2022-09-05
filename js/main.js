import { _Catalog } from "./module/catalog.js";
import { soloUrl } from "./common/common.js";
import { _Home } from "./module/home.js";
import { app } from "./common/common.js";

let homePage = new _Home(app);

let list = homePage.render();

function fetchCatalog(urlValue) {
  let url = urlValue;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let res = data.data.items;
      let ctl = new _Catalog(res);
      ctl.render();
    });
}

fetchCatalog(soloUrl);

// if city checkboxed

function cityFilter() {
  let checkedCity = document.getElementsByClassName("checkbox");
  let newUrl = soloUrl + "&cityParam=";
  for (let i = 0; i < checkedCity.length; i++) {
    let elem = checkedCity[i];
    elem.addEventListener("change", () => {
      if (event.currentTarget.checked) {
        newUrl = newUrl + `${elem.value}` + ",";
      } else newUrl = soloUrl;

      fetch(newUrl)
        .then((response) => response.json())
        .then((data) => {
          let res = data.data.items;
          let ctl = new _Catalog(res);
          ctl.render();
        });
    });
  }
}
cityFilter();
