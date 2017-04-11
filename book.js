

const Book  = function(name, price) {

  let = priceChanging = [];
  let = priceChanged = [];

  this.name = val => {
    return name;
   };

  this.price =  val => {
    if(val !== undefined && val !== price) {
      for(let i = 0; i < priceChanging.length; i++){
        if(!priceChanging[i](this, val)) {
          return price;
        }
      }
      price = val;
    }
    return price;
    for(let j= 0; j < priceChanged.length; i++){
      priceChanged[j](this);
    }
  };

  this.onPriceChanging= callback => {
    priceChanging.push(callback);
  }

  this.onPriceChanged = callback => {
    priceChanged.push(callback);
  }

};

let book = new Book('Javascript: The Good Parts', 24.89);

console.log(`Name is: ${book.name()}`);

console.log(`Price is: ${book.price()}`);

book.onPriceChanging((b, price) => {

  if(price > 100) {
    console.log('Error, price has gone unexpectedly high');
    return false;
  }

  return true;

});


book.onPriceChanged( b => {
  console.log( `The book price has changed to: ${b.price()}`);
});
