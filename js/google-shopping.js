var data = require('../products.json');



/* Question 1
var count = 0;
for (var i = 0; i < data.items.length; i++) {
   if (data.items[i].kind = 'shopping#products') {
     var newCount = count + 1;
     count = newCount;
   }
 }
 console.log(count);
*/

/*  Question 2
for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.inventories[0].availability === 'backorder') {
  v = data.items[i].product.title
  console.log(v);
  }
}
*/
/*   Question 3
for (var i = 0; i < data.items.length; i++){
var y = data.items[i].product.images.length
// console.log(y);
  if (y > 1 ) {
    console.log(data.items[i].product.title)
  }
}
*/


/*
// 4.) Print all "Canon" products in the items (careful with case sensitivity).

 //console.log(camBrand);
 for (var i = 0; i < data.items.length; i++) {
   var camBrand = data.items[i].product.brand;
   if (camBrand === "Canon") {
      console.log(data.items[i].product.title)
   }
 }
*/

/*
 // 5.) Print all items that have an author name of "eBay" and are brand "Canon".
 for (var i = 0; i < data.items.length; i++) {
   var camBrand = data.items[i].product.brand;
   var authorName = data.items[i].product.author.name.substring(0,4);
  // console.log(data.items[i].product.author.name.substring(0,4));
   if ((camBrand === "Canon") && (authorName === "eBay")) {
     console.log(data.items[i].product.title)
   }
 }
*/

 // 6.) Print all the products with their brand, price, and an image link
for (var i = 0; i < data.items.length; i++) {
 var allTitle = data.items[i].product.title;
 var allBrand = data.items[i].product.brand;
 var allPrice = data.items[i].product.inventories[0].price;
 var allImg = data.items[i].product.images[0].link;
 // console.log(i + ' ----------');
 // console.log(allImg);
 console.log ((i + 1) + ' : ' + 'Title: ' + allTitle + '\n' + 'Brand: ' + allBrand + '\n' + 'Price: ' + allPrice + '\n' + 'Img: ' + allImg)

}
