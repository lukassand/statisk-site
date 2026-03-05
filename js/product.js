const productId = new URLSearchParams(window.location.search).get("id");
const productContainer = document.querySelector(".product");

const endpoint = `https://kea-alt-del.dk/t7/api/products/${productId}`;

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then(renderProduct);
}

function renderProduct(data) {
  productContainer.innerHTML = `
<section class="product">
    <div class="product1">
<h2><a href="productlist.html?category=${data.category}">Back</a></h2>
<img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="">
</div>
<div class="product2">
<h1>${data.productdisplayname}</h1>
<ul>
<li>Type: ${data.articletype}</li>
<li>Kategori: ${data.category}</li>
<li>Pris: ${data.price},-</li>  
</ul>
<button>Køb nu</button>
</div>
</section>
  `;
}

getData();
