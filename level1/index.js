// function main() {

// }

// if (require.main === module) {
//   main();
// }

fetch('./input.json')
.then(function(resp){
  return resp.json();
})
.then(function(data){

  //display ARTICLES in my HTML
  let outputArticleName = " "
  let outputArticlePrice = " "
  const articles = data.articles
  for(i = 0; i < articles.length; i++){
    outputArticleName += '<div class="article"  data-id="'+ articles[i].id +'"><h3> name: ' + articles[i].name + '</h3> <p class=price data-price='+ articles[i].price +'> Price: ' + articles[i].price + ' €</p></div>'
  }
  document.getElementById('articles').insertAdjacentHTML('beforeend',outputArticleName)


   // display CART in my HTML
  let outputCartId = " "
  let outputItem = " "
  const carts = data.carts
  for(i = 0; i < carts.length; i++){
    outputCartId += '<div class=cart data-id='+ carts[i].id + '><h3> cart ID:' + carts[i].id + '</h3>'
    for(index = 0; index < carts[i].items.length; index++){
      outputCartId += '<div class=item data-id='+ carts[i].items[index].article_id +'> <h4 class=article_id> Article ID:' + carts[i].items[index].article_id +'</h4><p class=article-qty>'+ carts[i].items[index].quantity + '</p></div>';
    }
    outputCartId += '</div>'
  }
 document.getElementById('carts').insertAdjacentHTML('beforeend',outputCartId)


  const addArticle = (event) => {
    let articleId  = event.dataset.id
    const carts    = document.querySelectorAll(".cart")
    carts.forEach((cart) => {

      cart.addEventListener("click", (event) =>{

        const items = event.currentTarget.querySelectorAll(".item")
        items.forEach((item) => {

          if(item.dataset.id === articleId){
            let itemQty = item.querySelector(".article-qty")
            let qtyInt  = parseInt(itemQty.innerText, 10)
            itemQty.innerText = qtyInt += 1
          }

          // }else {

          //   const addArticleToCart = '<div class="item" data-id='+ articleId+'> <h4 class="article_id"> Article ID:'+ articleId+'</h4><p class="article-qty">1</p></div>'
          //   event.currentTarget.insertAdjacentHTML('beforeend', addArticleToCart)
          // }
        })

        articleId = ""

      })
    })
  }
  const allArticles = document.querySelectorAll(".article")
  allArticles.forEach((article) => {
    article.addEventListener("click", (event) =>{
      addArticle(event.currentTarget);

    });
  });
})





// carts = { carts: [
//   {
//     id:    'Edelweiss',
//     total: 'White',
//   },
//   {
//     id:    'Guinness',
//     total: 'Stout',
//   },
//   {
//     id:    'Edelweiss',
//     total: 'White',
//   }
// ]}

// File.open(filepath, 'wb') do |file|
//   file.write(JSON.generate(beers))
// end



 // const toJson = (article) =>{
 //    const cartsToJson     = document.querySelectorAll(".cart")
 //    cartsToJson.forEach((cart)  => {
 //      const itemsToJson   =  cart.querySelectorAll(".item")
 //      itemsToJson.forEach((item)=> {
 //        if(item.id == article.id){

 //          const jsonId = item.id
 //          const priceJson = article.querySelector(".price")
 //          const qty       = item.querySelector(".article-qty")
 //          const qtyJson   = parseInt(qty.innerText,10)
 //          const totalJson = qtyJson * priceJson.dataset.price
 //          const dataJson  = "{ 'id':" + jsonId + ',' + 'total:' + totalJson + " }"
 //          console.log(dataJson)


 //        }
 //      })

 //    })
 //  }




