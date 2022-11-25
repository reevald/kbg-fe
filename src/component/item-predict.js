class ItemPredict extends HTMLElement {
  set dataItem(objItem) {
    this._dataItem = objItem;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="text-yellow-600 mb-2 text-sm ${this._dataItem.id == 0 ? "pt-4" : ""}">${this._dataItem.class}</div>
      <div class="bg-gray-200 rounded-full mb-4 overflow-hidden">
        <div class="bg-yellow-300 text-sm font-medium text-yellow-600 text-center p-1 leading-none rounded-full whitespace-nowrap" style="width: ${this._dataItem.confidence * 100}%"> ${this._dataItem.confidence * 100}%</div>
      </div>
    `;
  }
}

customElements.define("item-predict", ItemPredict);