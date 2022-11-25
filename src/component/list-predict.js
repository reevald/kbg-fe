import './item-predict';

class ListPredict extends HTMLElement {
  // set listDataPredicts(data)
  set dataPredicts(arrPred) {
    this._dataPredicts = arrPred;
    this.render();
  }
  
  render() {
    // Clear first
    this.innerHTML = "";
    this._dataPredicts.forEach(data => {
      const elemItemPredict = document.createElement("item-predict");
      elemItemPredict.dataItem = data;
      this.appendChild(elemItemPredict);
    });
  }

  renderError(msg) {
    this.innerHTML = "";
    this.innerHTML += `<h2 class="px-4 text-red-500">${msg}</h2>`;
  }
}

customElements.define('list-predict', ListPredict);