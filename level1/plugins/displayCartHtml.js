
// const displayCart  = () => {
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
// }
