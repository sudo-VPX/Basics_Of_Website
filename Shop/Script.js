document.addEventListener("DOMContentLoaded", () => {

    // ========== All Items In Shop ==========

    const products = [
        {
            id: 1,
            name: "Item",
            price: 12.34,
            description: "High Quality Decription",
            image: "../Images/Logo_Yellow.png",
            reviews: 4
        },
        {
            id: 2,
            name: "Item",
            price: 123.34,
            description: "High Quality Decription",
            image: "../Images/Logo_Yellow.png",
            reviews: 3
        },
        {
            id: 3,
            name: "Item",
            price: 123.4,
            description: "High Quality Decription",
            image: "../Images/Logo_Yellow.png",
            reviews: 5
        },
        {
            id: 4,
            name: "Item",
            price: 125.34,
            description: "High Quality Decription",
            image: "../Images/Logo_Yellow.png",
            reviews: 2
        },
        {
            id: 5,
            name: "Item",
            price: 1274,
            description: "High Quality Decription",
            image: "../Images/Logo_Yellow.png",
            reviews: 5
        }
    ];

    // ========== All Items In Shop Execution ==========

    const shopContainer = document.getElementById("Full_Shop");

    products.forEach(product => {
        const link = document.createElement("a");
        link.href = "#";
        link.className = "Product_Box";

        link.innerHTML = `
      <img class="Product_Image" src="${product.image}" alt="${product.name}" />
      <div class="Product_Price">₹${product.price.toLocaleString("en-IN")}</div>
      <div class="Product_Name">${product.name}</div>
      <div class="Product_Description">${product.description}</div>
      <div class="Product_Reviews">${renderStars(product.reviews)}</div>
    `;

        shopContainer.appendChild(link);
    });

    // ========== Start Rating ==========

    function renderStars(count) {
        let starsHTML = "";
        for (let i = 1; i <= 5; i++) {
            starsHTML += `<span class="star${i <= count ? " filled" : ""}">&#9733;</span>`;
        }
        return starsHTML;
    }
});
