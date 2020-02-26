export default class Article {
  constructor(id, name, price){
    this.id = id,
    this.name = name,
    this.price = price
  }

  async getData() {
            await fetch('./input.json')
            .then((response) => {
               return response.json();
            })
            .then((data) => {
              this.result = data.articles;
              console.log(this.result)
            })
            .catch(function (error) {
                alert(error);
            })
        }
}


