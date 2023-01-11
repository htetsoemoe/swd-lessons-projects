// input
// const area = (w, b) => {
//     return parseFloat(w) * parseFloat(b) + " sqft";
// }

// const width = window.prompt("Enter Width");
// const breadth = window.prompt("Enter Breadth");

// window.alert(area(width, breadth));

const elementById = document.getElementById("");

// getElementsByTagName returns HTMLCollections
const elementByTagName = document.getElementsByTagName("");

// querySelector select only first dom element in page, but it can select with tagName, ID and Class
const querySelector = document.querySelector("");


// querySelectorAll returns (NodeList()) all element in page
const querySelectorAll = document.querySelectorAll("h2");

/**
 * Lesson of => document.querySelector("h2").classList  =>  returns DOMTokenList(2), you can treat like array object
 * 
 *           => DOMTokenList
 *                  document.querySelector("h2").classList.add()
 *                  document.querySelector("h2").classList.remove()
 *                  document.querySelector("h2").classList.contains()
 *                  document.querySelector("h2").classList.toggle()
 *                  document.querySelector("h2").classList.replace(oldToken, newToke)
 *                  document.querySelector("h2").classList.forEach(()=> {})
 */

// Get actual file from file input
// single file
/**
 * document.querySelector("#propic").files; => returns FileList
    document.querySelector("#propic").files[0];


    // mulitple files
    document.querySelector("#skill").files; => returns FileList
    document.querySelector("#skill").files[2];
 */





