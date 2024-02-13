class Cookie {
  constructor(flavor) {
    this.flavor = flavor;
  }

  showTitle() {
    console.log(`Flavor of this cookie is ${this.flavor}`);
  }
  static BrandName = 'Cheese Factory';
}

class FavoriteCookie extends Cookie {
  showTitle() {
    super.showTitle();
    this.#privateMethod();
    console.log('This flavor is amazing');
  }

  #privateMethod() {
    console.log('This is private');
  }
}

const cookie = new FavoriteCookie('chocolate');
cookie.showTitle();
console.log(`Brand Name is ${FavoriteCookie.BrandName}`);
