import { _Catalog } from "./module/catalog.js";
import { soloUrl } from "./common/common.js";

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
