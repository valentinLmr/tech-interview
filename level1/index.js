
// import { json } from "./plugins/json" ;
// import { selectArticle } from "./plugins/addArticleToCart"
// import { displayArticle } from "./plugins/displayArticleHtml"
// import { displayCart } from "./plugins/displayCartHtml"

fetch('./input.json')
.then(function(resp){
  return resp.json();
})
.then(function(data){
  //display ARTICLES in my HTML
  // displayArticle();
// const displayArticle = () => {
  let outputArticleName  = " "
  let outputArticlePrice = " "
  const articles         = data.articles
  for(i = 0; i < articles.length; i++){
    outputArticleName += '<div class="article"  data-id="'+ articles[i].id +'"><h3> name: ' + articles[i].name + '</h3> <p class=price data-price='+ articles[i].price +'> Price: ' + articles[i].price + ' €</p></div>'
  }
  document.getElementById('articles').insertAdjacentHTML('beforeend',outputArticleName)
// }




  // display CART in my HTML
  // displayCart();
  let outputCartId = " "
  let outputItem   = " "
  const carts      = data.carts

  for(i = 0; i < carts.length; i++){
    outputCartId += '<div class=cart data-id='+ carts[i].id + '><h3> cart ID:' + carts[i].id + '</h3>'
    for(index = 0; index < carts[i].items.length; index++){
      outputCartId += '<div class=item data-id='+ carts[i].items[index].article_id +'> <h4 class=article_id> Article ID:' + carts[i].items[index].article_id +'</h4><p class=article-qty>'+ carts[i].items[index].quantity + '</p></div>';
    }
    outputCartId += '</div>'
  }
 document.getElementById('carts').insertAdjacentHTML('beforeend',outputCartId)


  // Select and Add Article To cart
  // selectArticle();
    const addArticle = (event) => {
  let articleId  = event.dataset.id
  const carts    = document.querySelectorAll(".cart")
  carts.forEach((cart) => {
    cart.addEventListener("click", (event) =>{
      const items = event.currentTarget.querySelectorAll(".item")
      items.forEach((item) => {
        if(item.dataset.id === articleId){
          let itemQty       = item.querySelector(".article-qty")
          let qtyInt        = parseInt(itemQty.innerText, 10)
          itemQty.innerText = qtyInt += 1
        } else {
          // let arrWithdstrings = []
          let arrWithdstrings = '<div class="item" data-id='+ articleId+'> <h4 class="article_id"> Article ID:'+ articleId+'</h4><p class="article-qty">1</p></div>'
          event.currentTarget.insertAdjacentHTML('beforeend', arrWithdstrings)
        }
      })
      articleId = ""
    })
  })
}
// const selectArticle = () => {
  const allArticles = document.querySelectorAll(".article")
  allArticles.forEach((article) => {
    article.addEventListener("click", (event) =>{
      addArticle(event.currentTarget);
    });
  });
// }
  // sent data to OutputJson
  // json();

  const json = () => {
  const cartsToJson   = document.querySelectorAll(".cart")
  let totalJson       = 0
  let  dataJson       = "{ carts: ["
  cartsToJson.forEach((cart)  => {
    dataJson          += "{id:'" + cart.dataset.id + "'"
    const allItems    = cart.querySelectorAll(".item")
    allItems.forEach((item) => {
      let arrayItemId = [] ;
    const allArticles = document.querySelectorAll(".article")
    allArticles.forEach((article) => {
        if (item.dataset.id === article.dataset.id){
          const priceJson   = article.querySelector(".price")
          const qty         = item.querySelector(".article-qty")
          const qtyJson     = parseInt(qty.innerText,10)
          totalJson         += qtyJson * priceJson.dataset.price
        }
      });
    });
    dataJson  += ",total:'" + totalJson +"'}"
    totalJson = 0
  });
  dataJson    += "]}";
  const data = dataJson
  console.log(dataJson)

  const fs = require('fs');
  fs.writeFileSync('./output.json', data, (err) => {
  if (err) throw err;
    console.log('The file has been saved!');
  });
}
json()
})











