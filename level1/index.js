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
  let outputArticleName = " "
  const articles = data.articles
  for(i = 0; i < articles.length; i++){
  outputArticleName += '<li>' + articles[i].name + ' ' + articles[i].price + '</li>'
  }
  // document.getElementById('mydata').insertAdjacentHTML('beforeend',outputArticleName)

console.log(data.carts[0].items)
  let outputCartId = ""
  const carts = data.carts
  for(i = 0; i < carts.length; i++){
  const items = data.carts[i].items
  console.log(items)
  // outputArticleName += '<li>' + carts[i].name + ' ' + carts[i].price + '</li>'
  }
  // document.getElementById('mydata').insertAdjacentHTML('beforeend',output)



})

