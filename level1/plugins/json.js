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
  console.log(dataJson)
}

export { json }
