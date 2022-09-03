export class _Catalog {
  constructor(appJs) {
    this.appJs = appJs;
  }

  fetchCatalog() {
    const catalog = this.appJs
      .map((elem) => {
        return `<div class="developer-item">
                <div class="developer-img" style="background-image: url('${elem.image.url}');"></div>
                <div class="developer-title">
                    <p>${elem.projectName}</p>
                </div>
                <div class="developer-subtitle">
                    <p>${elem.priceLabel}</p>
                    <span>${elem.address}</span>
                </div>
                <div class="link-btn">
                    <p>გაიგეთ მეტი</p>
                </div>
            </div>`;
      })
      .join("");
    console.log("catalog", catalog);
    document
      .querySelector("#catalogId")
      .insertAdjacentHTML("afterbegin", catalog);
  }

  render() {
    this.fetchCatalog();
  }
}
