const container = document.querySelector(".container");

const endpoint = `https://kea-alt-del.dk/t7/api/categories`;

function getData(){
fetch(endpoint).then(res=>res.json()).then(showData);
}

function showData(json) {
    let markup = "";
    json.forEach(element => {console.log(element);
markup +=  `<a href="productlist.html?category=${element.category}" class="card">${element.category}</a>
 `
    });

container.innerHTML = markup;

}

getData();
