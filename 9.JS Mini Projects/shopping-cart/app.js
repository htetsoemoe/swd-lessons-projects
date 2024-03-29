// console.log(products);

// variables
const productCards = document.querySelector("#productCards");
const app = document.querySelector("#app");
const productDetailModal = new bootstrap.Modal("#productDetailModal");
const productCategories = document.querySelector('#productCategories');


// productDetailModal.show();

// create rating function for product
const star = no => {
    let starString = "";
    for (let i = 1; i <= 5; i++) {
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
};

// functionalities for product category buttons
const slugToText = (slug) => {
    return slug.replaceAll("-", " ");
};

// create category buttons
const createCategoryBtn = (name) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-dark me-2 mb-2 text-capitalize cat";
    btn.innerText = slugToText(name);
    btn.setAttribute("cat", name);

    return btn;
};

// create category buttons with catagories
categories.forEach(category => {
    productCategories.append(createCategoryBtn(category))
});


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
                        ${slugToText(product.category)}
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
const renderProductCard = (products) => {
    products.forEach(product => {
        productCards.append(createProductCard(product));
    });
};

renderProductCard(products);

// create product detail carousel in model-body
const productDetailCarousel = arr => {
    let slides = "";
    let indicators = "";

    arr.forEach((el, index) => {
        slides += `<div class="carousel-item ${index === 0 && "active"}">
            <img src="${el}"
            class="d-block w-100 product-detail-img"
            alt="..."
            />
        </div>`;

        indicators += `<button type="button"
            data-bs-target="#productDetailCarousel"
            data-bs-slide-to="${index}"
            class="${index === 0 && "active"}"
            aria-current="true"
            aria-label="Slide 1"
        ></button>`;
    });

    return { slides, indicators };
}

// create 'Carousel' in 'Modal'
app.addEventListener('click', event => {
    //console.log(event.target.closest(".product-card"));

    // event.target.closest(".product-card") => get column for clicked product
    if (event.target.closest(".product-card")) {
        const currentCard = event.target.closest(".product-card");
        const currentProductId = currentCard.getAttribute("product-id");
        const currentProduct = products.find(product => product.id == currentProductId);

        console.log(currentProduct);

        productDetailModal._element.querySelector(".modal-title").innerText = currentProduct.title;

        productDetailModal._element.querySelector(".modal-body").innerHTML = `
            <div id="productDetailCarousel" class="carousel slide">
                <div class="carousel-indicators">
                    ${productDetailCarousel(currentProduct.images).indicators}
                </div>
                <div class="carousel-inner">
                    ${productDetailCarousel(currentProduct.images).slides}
                </div>

                <button class="carousel-control-prev" type="button"
                data-bs-target="#productDetailCarousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button"
                data-bs-target="#productDetailCarousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
                <div class="badge text-dark text-capitalize bg-light">
                    ${slugToText(currentProduct.category)}
                </div>
                <div class="">
                    ${star(currentProduct.rating)}
                </div>
            </div>

            <div class="px-2">
                <p class="mb-2">${currentProduct.description}</p>
                <p class="">$ ${currentProduct.price}</p>
            </div>

        `;

        productDetailModal.show();
    }
});


