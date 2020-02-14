
// const displayArticle = () => {
  let outputArticleName  = " "
  let outputArticlePrice = " "
  const articles         = data.articles
  for(i = 0; i < articles.length; i++){
    outputArticleName += '<div class="article"  data-id="'+ articles[i].id +'"><h3> name: ' + articles[i].name + '</h3> <p class=price data-price='+ articles[i].price +'> Price: ' + articles[i].price + ' €</p></div>'
  }
  document.getElementById('articles').insertAdjacentHTML('beforeend',outputArticleName)
// }

export { displayArticle }

