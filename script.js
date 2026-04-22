const products = [
    { id: 1, name: "Phone", price: 12000, img: "https://via.placeholder.com/200" },
    { id: 2, name: "Laptop", price: 45000, img: "https://via.placeholder.com/200" },
    { id: 3, name: "Headphones", price: 1500, img: "https://via.placeholder.com/200" },
    { id: 4, name: "Shoes", price: 2000, img: "https://via.placeholder.com/200" }
];

let cart = 0;

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");
const search = document.getElementById("search");

// Display products
function displayProducts(items) {
    productList.innerHTML = "";
    items.forEach(p => {
        productList.innerHTML += `
            <div class="card">
                <img src="${p.img}">
                <h3>${p.name}</h3>
                <p class="price">₹${p.price}</p>
                <button onclick="addToCart()">Add to Cart</button>
            </div>
        `;
    });
}

// Add to cart
function addToCart() {
    cart++;
    cartCount.innerText = cart;
}

// Search
search.addEventListener("input", () => {
    const value = search.value.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(value)
    );
    displayProducts(filtered);
});

displayProducts(products);
