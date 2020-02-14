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

export {selectArticle}
