function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.length;
    const badge = document.getElementById("cart_count");
    if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-block" : "none";
    }
    document.getElementById("cart_count").textContent = count;
    
}

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Retrieve existing cart or initialize empty array
    cart.push(product); // Add the product to the cart
    localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart back to localStorage
    updateCartCount(); // Refresh badge
    alert(`${product.name} has been added to your cart!`);
}

document.getElementById("clear-cart").addEventListener("click", () => {
    localStorage.removeItem("cart"); // Clear the cart from localStorage
    // alert("Cart has been cleared.");
    loadCart(); // Refresh the cart display
    location.reload(true);
    
});

  // Run on page load
  document.addEventListener("DOMContentLoaded", updateCartCount);
