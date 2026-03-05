const kategori = new URLSearchParams(window.location.search).get("category");

const container = document.querySelector(".container2");

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${kategori}`;

function getData(){
fetch(endpoint).then(res=>res.json()).then(showData);
}

function showData(json) {
    let markup = "";
    json.forEach(element => {console.log(element);
    // calculate discounted price and round up to whole number
    const discountedPrice = Math.ceil(element.price - (element.price * element.discount / 100));
    // determine opacity based on soldout flag (1 means sold out)
    const opacity = element.soldout === 1 ? 0.5 : 1;
// build sold out badge only when item is sold
    const soldBadge = element.soldout === 1 ? '<span class="badge">Sold Out</span>' : '';
    // show discount badge only when discount value exists and is non-zero
    const discountBadge = element.discount ? `<span class="badge-discount">${element.discount}%</span>` : '';
    // only show a reduced price line if there is an actual discount
    const newPriceMarkup = element.discount ?
      `<p class="newprice">Now DKK ${discountedPrice},-</p>` : '';
    // old price markup; strike-through only when discount applies
    const oldPriceMarkup = element.discount ?
      `<p class="oldprice">DKK <span style="text-decoration: line-through; color: red;">${element.price}</span>,-</p>` :
      `<p class="oldprice">DKK ${element.price},-</p>`;

    markup +=  `<a href="product.html?id=${element.id}&category=${element.category}" class="card2">
    ${soldBadge}
    ${discountBadge}
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="" style="opacity: ${opacity}">
    <h1>${element.productdisplayname}</h1>
   <h2>${element.brandname} | ${element.subcategory}</h2>
   ${oldPriceMarkup}
   ${newPriceMarkup}
 </a>
 `
    });

container.innerHTML = markup;

}

getData();
