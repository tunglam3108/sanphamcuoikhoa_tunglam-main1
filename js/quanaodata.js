const products = [
    {
        "id": 1,
        "name": "Bikini",
        "image": "../",
        "price": "100 $" 
    },
    {
        "id": 2,
        "name": "Áo tắm một mảnh",
        "image": "link_hinh_anh_2.jpg",
        "price": "200 $"
    },
    {
        "id": 3,
        "name": "Quần bơi",
        "image": "../img/quần áo/quần bơi.png",
        "price": "150 $"
    },
    {
        "id": 4,
        "name": "Áo khoác bơi",
        "image": "../img/quần áo/áo khoác bơi.png",
        "price": "300 $"
    }

]

let productLis = document.querySelector(".product-list")
let sumOfProduct = ``;

let sum = 0
for (let key of products) {
  if (sum < 4) {
    sumOfProduct += `
    <div class="product">
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