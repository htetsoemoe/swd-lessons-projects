// console.log(products);

// variables
const productCards = document.querySelector("#productCards");

// create card for product
const createProductCard = (product) => {
    const div = document.createElement("div");
    div.className = "col-12 col-md-6 col-lg-4 product-card";
    div.setAttribute("product-id", product.id);

    div.innerHTML = `
        <div class="card">
            <div class="card-body">
                <img class="product-card-img mb-3" src="${product.thumbnail}" alt="" />
                <h4 class="fw-bold mb-2 text-truncate">${product.title}</h4>

                <div class="d-flex justify-content-between align-items-center mb-2">
                    <div class="badge text-dark text-capitalize bg-light">
                        ${product.category.replaceAll("-"," ")}
                    </div>
                    <div class="">
                        ${product.rating}
                    </div>
                </div>

                <p class="text-black-50 small product-card-description">
                    ${product.description}
                </p>
                <div class="d-flex border-top pt-3 justify-content-between align-items-center">
                    <p class="mb-0">$ ${product.price}</p>
                    <button class="btn btn-outline-dark">Add to Cart</button>
                </div>
            </div>
        </div>
    `;

    return div;
}

products.forEach(product => {
    productCards.append(createProductCard(product));
})

//${star(product.rating)} ${excerpt(product.description)}