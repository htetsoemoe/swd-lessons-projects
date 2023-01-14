const createBtn = document.querySelector("#createBtn");
const textInput = document.querySelector("#textInput");
const lists = document.querySelector("#lists");

// create list item
const createLi = (text) => {
    // create dynamic ID for list
    const dynamicID = "flexCheck" + Date.now();

    const li = document.createElement("li");
    li.ondblclick = edit;
    li.className = "list-group-item d-flex align-items-center justify-content-between";
    li.innerHTML = `
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${dynamicID}" onchange="done(event)">
             <label for="${dynamicID}" class="form-check-label">
                ${text}
            </label>
        </div>
       
        <button class="btn btn-sm btn-danger ms-auto" onclick="del(event)">Del</button>
    `;
    return li;
};

// add list to parent
const addList = () => {
    lists.append(createLi(textInput.value));
    textInput.value = null;
};

// delete function
const del = event => {
    if (confirm("Are you sure to delete?")) {
        event.target.parentElement.remove();
    }
}

// done function
const done = event => {
    //console.log(event.target.nextElementSibling);
    event.target.nextElementSibling.classList.toggle("text-decoration-line-through");
}

// edit function
const edit = event => {
    // console.log(event.target); // get event triggered element (parent element)
    const oldText = event.target.querySelector(".form-check-label");// select child element from parent element
    const newText = prompt("Input New Text", oldText.innerText);
    oldText.innerText = newText;
}

// if user enter inputs and click button
createBtn.addEventListener("click", addList);

// if user enter inputs and click enter key
textInput.addEventListener("keyup", event => {
    if (event.keyCode === 13) {
        addList();
    }
})


