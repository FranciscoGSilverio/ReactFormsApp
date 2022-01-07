export default class Categories {
  constructor() {
    this.categories = [];
    this._inscribers = [];
  }

  inscribe(func) {
    this._inscribers.push(func);
  }

  uninscribe(func) {
    this._inscribers = this._inscribers.filter((f) => f !== func);
  }

  notify() {
    this._inscribers.forEach((func) => {
      func(this.categories);
    });
  }

  addCategory(categoryValue) {
    this.categories.push(categoryValue);
    this.notify(this.categories);
  }
}
