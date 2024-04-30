const products = [
    {
        "id": 1,
        "name": "Balo chống nước",
        "image": "../img/vật dụng/ba lô chống nước.png",
        "price": "200 $" 
    },
    {
        "id": 2,
        "name": "Kem chống nắng",
        "image": "../img/vật dụng/kem chống nắng.png",
        "price": "50 $" 
    },
    {
        "id": 3,
        "name": "Phao bơi",
        "image": "../img/vật dụng/phao bơi.png",
        "price": "100 $" 
    },
    {
        "id": 4,
        "name": "Kính râm",
        "image": "../img/vật dụng/kính râm.png",
        "price": "100 $" 
    }
]

let productLis = document.querySelector(".product-list")
let sumOfProduct = ``;

let sum = 0
for (let key of products) {
  if (sum < 4) {
    sumOfProduct += `
    <div class="product" id="${key.id}">
                <div class="images"> <img src="${key.image}" alt=""></div>
                 <h3>${key.price}</h3>
                 <p>${key.name}</p>
                 <a href="chitiet.html">Xem thêm</a>
                </div>
    `;
  }
  sum++
}
console.log(sumOfProduct);

productLis.innerHTML = sumOfProduct