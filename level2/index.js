class DeliveryFees {
  constructor(){}
  async getData() {
    await fetch('./input.json')
    .then((response) => {
       return response.json();
    })
    .then((data) => {
     this.result = data.delivery_fees
     console.log(this.result)
    })
    .catch(function (error) {
        alert(error);
    })
  }
}



class Article {
  constructor(){
  }

  async getData() {
    await fetch('./input.json')
    .then((response) => {
       return response.json();
    })
    .then((data) => {
     this.result = data.articles
     // console.log(this.result)
    })
    .catch(function (error) {
        alert(error);
    })
  }
}

class Cart {
  constructor(){
  }
  async getData() {
    await fetch('./input.json')
    .then((response) => {
       return response.json();
    })
    .then((data) => {
     this.result = data.carts
     // console.log(this.result)
    })
    .catch(function (error) {
        alert(error);
    })
  }
}

class Object {
  constructor(carts){
    this.carts = carts = []
  }
}


const element = {
  searchCartsDiv: document.querySelector(".carts"),
  searchArticlesDiv: document.querySelector(".articles")
}

// global state of the app
const state = {};

const controlDeliveryFees =  async() => {
  state.deliveryFees = new DeliveryFees();
  await state.deliveryFees.getData()
  console.log(state.deliveryFees)
}


const controlObject = () => {
state.object = new Object("carts")
console.log(state.object)
}

const controlArticle = async() => {
  state.articles = new Article();
  await state.articles.getData();
  displayArticles(state.articles.result);
}

const controlCart = async() => {
  state.carts = new Cart();
  await state.carts.getData();
  displayCarts(state.carts.result);
}

const clearCartsView = () => {
  element.searchCartsDiv.innerHTML = '' ;
}


const findArticle = (item) => {
  const artItem = state.articles.result.find(element => element.id === item.article_id)
  return artItem
}

const findCart = (cartId) => {
  const artItem = state.carts.result.find(el => el.id === parseInt(cartId, 10))
  return artItem
}



const findCartInData = cartId => {

  let cartToCo;
  cartToCo = findCart(cartId);
  findCardPrice(cartToCo);
}


const findCardPrice = cart => {
  console.log(cart)
  const arrayPrice = []

  let article, totalPrice, cartObject, total;

  cart.items.forEach(item => {
    article = findArticle(item);
    arrayPrice.push(article.price * item.quantity)
  })
  total = arrayPrice.reduce((arr, curr) => arr + curr )

   return total
}


const outputDataJson = (total, id) => {

  state.object.carts.push(
  { id: id,
    total: total
  })


  //here we need to send to JSON output File instead console.log
  console.log(state.object)
}

const getHtmlForItem = (article, item) =>`
<div class="item">
  <div class="item__infos">
    <div class="article__name" data-id="${article.id}">
      ${article.name}
    </div>
    <div class="article__qty" data-qty="${item.quantity}">
        ${item.quantity}
    </div>
  </div>
   <div class="item__delete">
        <i class="far fa-times-circle"></i>
    </div>
</div>
`;

const getHtmlArticles = article =>
`
    <div class="article" data-id="${article.id}">
      <p> ${article.name}</p>
      <p>${article.price / 100} €</p>
    </div>
`;

const getHtmlCarts = cart => `

<div class="cart" data-id="${cart.id}">
  <h3>Cart n°${cart.id}</h3>
  <div class="cart_header">
    <p>Name</p>
    <p>Quantity</p>
  </div>
  <div class="items">
    ${cart.items.map(el => getHtmlForItem(findArticle(el), el)).join('')}
  </div>

  <div class="total">
  ${findCardPrice(cart)}
  </div>

  <button type="button" class="btn btn-danger">CheckOut Cart</button>
</div>
`;



const displayArticles = articles => {
  articles.forEach(article => {
    if(article){
      element.searchArticlesDiv.insertAdjacentHTML('beforeend', getHtmlArticles(article))
    }
  })
}

const displayCarts = carts => {
  clearCartsView();
  carts.forEach(cart => {
    if(cart.items.length > 0){
      element.searchCartsDiv.insertAdjacentHTML('beforeend', getHtmlCarts(cart))
    }
  })
}

//have to imporve SelectArticle to make it more maintainable
const selectArticleForCard = () => {
  let article, cart, articleDiv;

  element.searchArticlesDiv.addEventListener("click", e => {
    articleDiv = e.target.closest(".article");
    if(articleDiv){
      articleDiv.classList.add('active')

      element.searchCartsDiv.addEventListener("click", e => {
        const cartDiv = e.target.closest(".cart");
        cart = cartDiv.dataset.id
        addArticle(articleDiv, cart)
      articleDiv = '';
      });
    }
  });
}

//have to improve AddArticle to make it more maintainable

const addArticle = (articleDiv, cart) => {
  let articleId, stateCart, element;

  if(articleDiv) {articleDiv.classList.remove('active')
    articleId = parseInt(articleDiv.dataset.id, 10)
    stateCart = state.carts.result.find(e => e.id === parseInt(cart,10))
    if(stateCart) {
      element = stateCart.items.find(e => e.article_id === articleId)
      if(element){
        element.quantity += 1
      }else{ stateCart.items.push(
          {
            article_id: articleId,
            quantity: 1
          }
        );
      }
    }
  }
  displayCarts(state.carts.result);
}


const SelectCartTocheckOut = () => {
  let cartToCo;
  element.searchCartsDiv.addEventListener('click', e => {
    if(e){
      cartToCo = e.target.closest('.cart').dataset.id;
      findCartInData(cartToCo);
    }
  })
}

const init = () => {
  controlArticle();
  controlCart();
  selectArticleForCard();
  SelectCartTocheckOut();
  controlObject();
  controlDeliveryFees();
}

init();








