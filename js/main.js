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

// if city checkboxed

function getCityUrl(value) {
  let filteredUrl = soloUrl + `&cityParam=${value}`;
  return filteredUrl;
}

// fetchCatalog (getCityUrl('ბათუმი'))

let checked = document.getElementsByClassName("checkbox");
for (let i = 0; i < checked.length; i++) {
  let elem = checked[i];
  elem.addEventListener("change", () => {
    if (event.currentTarget.checked) {
      fetchCatalog(getCityUrl(elem.value));
    } else {
      fetchCatalog(soloUrl);
    }
  });
}
// if radio btn ia clicked

function getPriceUrl(minValue, maxValue) {
  let filteredUrl = soloUrl + `&fromParam=${minValue}`;
  return filteredUrl;
}

let checkedRadio = document.getElementsByClassName("radio");
for (let i = 0; i < checkedRadio.length; i++) {
  let elem = checkedRadio[i];
  elem.addEventListener("click", () => {
    fetchCatalog(getPriceUrl(elem.value));
  });
}

fetchCatalog(soloUrl);
