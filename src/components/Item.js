
class Item {
  static lastId = idRandom();

  constructor(text) {

    this.id = Item.lastId++;
    this.text = text;
    this.done = false;
  }
}
function idRandom() {
  return Math.round(Math.random() *  Math.random() * 98371034297)
}

export default Item;