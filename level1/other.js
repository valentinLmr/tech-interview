// const selectArticleForCard = () => {
//   let article, cart;
//   element.searchArticlesDiv.addEventListener("click", e => {
//     const articleDiv = e.target.closest(".article");
//     if(articleDiv){
//       articleDiv.classList.toggle('active')
//       article = articleDiv.dataset.id

//       element.searchCartsDiv.addEventListener("click", e => {
//         const cartDiv = e.target.closest(".cart");
//         cart = cartDiv.dataset.id
//         addArticle(article, cart)
//       });
//     }
//   });
// }

// const addArticle = (article, cart) => {
//   stateCart = state.carts.result.find(e => e.id === parseInt(cart,10))
//   if(stateCart) {
//     const element = stateCart.items.find(e => e.article_id === parseInt(article, 10))
//     if(element){
//       element.quantity += 1
//     } else {
//       stateCart.items.push({
//         article_id: parseInt(article, 10),
//         quantity: 1
//       })
//     }
//   }
//   console.log(state.carts.result)
// }
