const photoUpload = document.querySelector("#photoUpload");
const uploaderUI = document.querySelector("#uploaderUI");
const photos = document.querySelector("#photos");
const createSlideShow = document.querySelector("#createSlideShow");
const output = document.querySelector("#output");

// when client clicks the photUpload event delegate to photoUpload input
uploaderUI.addEventListener("click", () => {
    photoUpload.click();
});

// function for file upload and display images in #photos section
photoUpload.addEventListener("change", (event) => {
    console.log(event.target.files); // get fileList

    [...event.target.files].forEach((file) => {
        const img = new Image(); // create image using Image()

        const reader = new FileReader(); // create file reader
        reader.readAsDataURL(file);

        reader.addEventListener('load', (event) => {
            /*return => FileReader object => {readyState: 2, result: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AA…8tey620OH3JH35pvL/wOI2YH6PNjibQAAAABJRU5ErkJggg==', error: null, onloadstart: null, onprogress: null, …} */
            console.log(event.target);

            img.src = event.target.result;
            img.classList.add("photo", "me-2");
            photos.append(img);
        });
    });
});

// create carousel using photo src list
const createCarousel = (photoList => {
    const id = "carousel" + Date.now(); // create id for each carousel item
    const carousel = document.createElement("div");
    carousel.className = 'carousel slide';
    carousel.id = id;

    let slides = "";
    let indicators = "";

    photoList.forEach((photo, index) => {
        slides += `
            <div class="carousel-item ${index === 0 && "active"}">
                <img src="${photo}" class="d-block  w-100" alt="...">
            </div>`;
        indicators += `
            <button type="button" ${index === 0 && 'class="active"'}
                data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" aria-label="Slide 2">
            </button>
        `;
    });

    carousel.innerHTML = `
        <div class="carousel-indicators">
            ${indicators}
        </div>
        <div class="carousel-inner">
            ${slides}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    `;

    output.append(carousel);
});

// create slide show function for 'createSlideShow' button
createSlideShow.addEventListener("click", () => {
    const allPhotoSrcs = [...document.querySelectorAll(".photo")];
    createCarousel(allPhotoSrcs.map(photo => photo.src));
});

// create upload multiple photo to application using drag and drop API

uploaderUI.addEventListener("dragover", (event) => {
    event.preventDefault();
});

uploaderUI.addEventListener("drop", (event) => {
    event.preventDefault();
    console.log(event.dataTransfer.files);

    [...event.dataTransfer.files].forEach(file => {
        const image = new Image();

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load", (event) => {
            image.src = event.target.result; // loaded image file's result "url"
            image.classList.add("photo", "me-2");
            photos.append(image);
        });
    })
});