let data;
let showItem = '';
let modalContent = '';

// load data from json file
let httpRequest = new XMLHttpRequest(); 
httpRequest.open("GET", "./data/data.json", true);
httpRequest.send();
httpRequest.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
        data = JSON.parse(this.response);
        
        data.products.forEach(item => {
            showItem += `<div class="item">
            <div><img src="${item.image}" width="220" height="260.25" alt="apple-product"  /></div>
            <div class="product-name">${item.name}</div>
            <div class="card-footer">
                <div class="product-price">$ ${item.price}</div>
                <button class="add-cart" onclick="addToCart(${item.id})"><i class="fas fa-plus"></i> Add to cart</button>
            </div>
            </div>`
        })

        document.getElementById("products").innerHTML = showItem;
    }   
});
