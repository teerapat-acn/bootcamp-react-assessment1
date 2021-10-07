const addToCart = (productId) => {
    const filterItem = data.products.filter(item => item.id === productId)
    cartCount.style.display = "inline";

    let item = `
    <div class="cartitem">
        <div><img src="${filterItem[0].image}" width="80" /></div>
        <div class="cart-info">
        <div class="cart-product-name">${filterItem[0].name}</div>
        <div class="cart-product-price">$ ${filterItem[0].price}</div>
        </div>
    </div>
    `
    myCartModal.insertAdjacentHTML('beforeend',item)
}