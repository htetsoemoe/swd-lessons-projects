const createBtn = document.querySelector("#createBtn");
const textInput = document.querySelector("#textInput");
const lists = document.querySelector("#lists");
const total = document.querySelector("#total");
const doneTotal = document.querySelector("#doneTotal");

const data = [
    "HTML",
    "CSS",
    "JavaScript",
    "NodeJS",
    "Spring Boot",
    "MySQL"
];

const count = () => {
   const totalCount = lists.children.length;
  const doneTotalCount = [...lists.children].filter(
    (el) => el.querySelector(".form-check-input").checked === true
  ).length;
  total.innerText = totalCount;
  doneTotal.innerText = doneTotalCount;
}

// create list item
const createLi = (text) => {
    // create dynamic ID for list
    const dynamicID = "flexCheck" + Math.random();

    const li = document.createElement("li");
    //li.ondblclick = edit;
    li.className = "list-group-item d-flex align-items-center justify-content-between";
    li.innerHTML = `
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${dynamicID}" onchange="done(event)">
             <label for="${dynamicID}" class="form-check-label">
                ${text}
            </label>
        </div>
       
        <div class="btn-group">
            <button class="btn btn-sm btn-outline-dark" onclick="edit(event)">
                <i class="bi bi-pencil pe-none"></i>
            </button>
            <button class="btn btn-sm btn-outline-dark" onclick="del(event)">
                <i class="bi bi-trash3 pe-none"></i>
            </button>
        </div>
        
        
    `;
    return li;
};

data.forEach(d => lists.append(createLi(d)));

// add list to parent
const addList = () => {
    if (textInput.value.trim()) {
        lists.append(createLi(textInput.value));
        textInput.value = null;
        count();
    } else {
        alert("Please Input Value!");
    }
};

// delete function
const del = event => {
    if (confirm("Are you sure to delete?")) {
        console.log(event.target);
        event.target.closest(".list-group-item").remove();
        count();
    }
}

// done function
const done = event => {
    //console.log(event.target.nextElementSibling);
    event.target.nextElementSibling.classList.toggle("text-decoration-line-through");
    count(); // this line important for numbers of done counting
}

// edit function
const edit = event => {
    // console.log(event.target); // get event triggered element (parent element)
    const oldText = event.target.closest(".list-group-item").querySelector(".form-check-label");// select child element from parent element
    const newText = prompt("Input New Text", oldText.innerText);
    if (newText && newText.trim()) {
        oldText.innerText = newText;
    }
}

// if user enter inputs and click button
createBtn.addEventListener("click", addList);

// if user enter inputs and click enter key
textInput.addEventListener("keyup", event => {
    if (event.keyCode === 13) {
        addList();
    }
});

window.addEventListener("load", count);


