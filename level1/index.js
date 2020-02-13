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
      outputCartId += '<div class=item> <h4 class=article_id data-id='+ carts[i].items[index].article_id +'> Article ID:' + carts[i].items[index].article_id +'</h4><p class=article-qty> Quantité: '+ carts[i].items[index].quantity + '</p></div>';
    }
    outputCartId += '</div>'
  }
 document.getElementById('carts').insertAdjacentHTML('beforeend',outputCartId)

  const allArticles = document.querySelectorAll(".article")
  console.log(allArticles)
})







