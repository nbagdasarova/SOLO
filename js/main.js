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

// function getCityUrl(value) {
//   let filteredUrl = soloUrl + `&cityParam=${value}`;
//   return filteredUrl;
// }

// fetchCatalog (getCityUrl('ბათუმი'))

function getUrl() {
  let checkedCity = document.getElementsByClassName("checkbox");
  let newUrl = soloUrl + "&cityParam=";
  let checkedRadio = document.getElementsByClassName("radio");
  for (let i = 0; i < checkedCity.length; i++) {
    let elem = checkedCity[i];
    elem.addEventListener("change", () => {
      if (event.currentTarget.checked) {
        cityArr.push({ id: i, value: elem.value });
        newUrl = newUrl + `${elem.value}` + ",";
      } else newUrl = soloUrl;

      fetch(newUrl)
        .then((response) => response.json())
        .then((data) => {
          let res = data.data.items;
          let ctl = new _Catalog(res);
          console.log("test", res);
          ctl.render();
        });
    });

    // for (let i = 0; i < checkedRadio.length; i++) {
    //     let item = checkedRadio[i];
    //     item.addEventListener("click", () => {
    //       if (event.currentTarget.checked){
    //       newUrl =  newUrl + `&fromParam=${minValue}`
    //     } });

    //     }
    //   }
  }

  console.log(newUrl);
}

getUrl();

// for (let i = 0; i < checkedCity.length; i++) {

//   let elem = checkedCity[i];
//   elem.addEventListener("change", () => {
//        if (event.currentTarget.checked) {
//             let newUrl = soloUrl + `&cityParam=${elem.value}`;
//       fetchCatalog(newUrl);
//     } else {
//       fetchCatalog(soloUrl);
//     }
//   });
// }
// // if radio btn ia clicked

// function getPriceUrl(minValue, maxValue) {
//   let filteredUrl = soloUrl + `&fromParam=${minValue}`;
//   return filteredUrl;
// }

// // let checkedRadio = document.getElementsByClassName("radio");
// for (let i = 0; i < checkedRadio.length; i++) {
//   let elem = checkedRadio[i];
//   elem.addEventListener("click", () => {
//     fetchCatalog(getPriceUrl(elem.value));
//   });
// }

// fetchCatalog(soloUrl);
