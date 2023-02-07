// console.log(products);

// variables
const productCards = document.querySelector("#productCards");

// create rating function for product
const star = no => {
    let starString = "";
    for(let i = 1; i <= 5; i++) {
        if (Math.ceil(no) <= i) { // if no=3 <= 1 and 2 and 3
            starString += "<i class='bi bi-star'></i>"
        } else {
            starString += "<i class='bi bi-star-fill'></i>"
        }
    }
    return starString;
};

// create description function for product
const excerpt = (str, maxLength = 70) => {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + " ...";
    }
    return str;
}

// create card function for product
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
                        ${star(product.rating)}
                    </div>
                </div>

                <p class="text-black-50 small product-card-description">
                    ${excerpt(product.description)}
                </p>
                <div class="d-flex border-top pt-3 justify-content-between align-items-center">
                    <p class="mb-0">$ ${product.price}</p>
                    <button class="btn btn-outline-dark">Add to Cart</button>
                </div>
            </div>
        </div>
    `;

    return div;
};

// append a column with product cards to a 'ProductCards' row
products.forEach(product => {
    productCards.append(createProductCard(product)); 
});
