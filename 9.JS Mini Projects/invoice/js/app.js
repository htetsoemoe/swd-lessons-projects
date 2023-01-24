// data
const services = [
  {
    id: 1,
    title: "Domain Service",
    price: 15,
  },
  {
    id: 2,
    title: "Hosting Service",
    price: 30,
  },
  {
    id: 3,
    title: "Web Design Service",
    price: 150,
  },
  {
    id: 4,
    title: "Maintenance Service",
    price: 100,
  },
];

// selector
const app = document.querySelector("#app");
const invoiceForm = document.querySelector("#invoiceForm")
const selectService = document.querySelector("#selectService");// selector
const qunatity = document.querySelector("#quantity");
const listTable = document.querySelector("#list-table");
const lists = document.querySelector("#lists");// table body
const subTotal = document.querySelector("#subTotal");
const tax = document.querySelector("#tax");
const total = document.querySelector("#total");
const addServiceOpenBtn = document.querySelector("#addServiceOpenBtn");
const addServiceModal = document.querySelector("#addServiceModal");
const addServiceForm = document.querySelector("#addServiceForm"); // Add Service Form
const serviceCloseBtn = document.querySelector("#serviceCloseBtn"); // close btn of service form
const serviceAddBtn = document.querySelector("#serviceAddBtn"); // add btn of service form

// logics
// add services to select option
services.forEach(({title, id}) => {
  selectService.append(new Option(title, id))
});

// create row with data in table
const createTr = (service, qunatity) => {
  const tr = document.createElement("tr");
  tr.classList.add("list");
  tr.setAttribute("service-id", service.id);
  const total = service.price * qunatity;
  tr.innerHTML = `
        <td class="d-flex justify-content-between">
          ${service.title}
          <i class="bi bi-trash3 text-danger del-btn"></i>
        </td>
        <td class="text-end list-quantity">${qunatity}</td>
        <td class="text-end">${service.price}</td>
        <td class="text-end list-total">${total}</td>
    `;

  return tr;
};

// calculate tax
const calculateTax = (amount, percentage = 5) => {
  return amount * (percentage / 100);
}

// calculate total
const findTotal = () => {
  // const listTotal = document.querySelectorAll(".list-total");
  let valueOfSubTotal = [...document.querySelectorAll(".list-total")].reduce((pv, cv) => pv + parseFloat(cv.innerText), 0);

  subTotal.innerText = valueOfSubTotal;
  tax.innerText = calculateTax(valueOfSubTotal);
  total.innerText = valueOfSubTotal + calculateTax(valueOfSubTotal);

};

// show table
const showtable = () => {
  if (lists.children.length) {
    listTable.classList.remove("d-none");
  } else {
    listTable.classList.add("d-none");
  }
}

// get all data from 'form inputs'
invoiceForm.addEventListener("submit", event => {
  event.preventDefault();

  //console.log(selectService.value, qunatity.valueAsNumber, selectedService);

  // find selected service object 
  const selectedService = services.find(({id}) => id == selectService.value);
  console.log(selectedService);
  
  // check one of the service type (row) is already exist in table
  const isExistedService = [...lists.children].find(
    el => el.getAttribute("service-id") == selectedService.id
  );
  
  if (isExistedService) {
    console.log("already exist");
    console.log(isExistedService);

    // update quantity and total of existed service
    const existedQuantity = isExistedService.querySelector(".list-quantity");

    existedQuantity.innerText = parseFloat(existedQuantity.innerText) + qunatity.valueAsNumber;
    isExistedService.querySelector(".list-total").innerText = existedQuantity.innerText * selectedService.price;

    
  } else {
    // generate row 
    lists.append(createTr(selectedService, qunatity.valueAsNumber)); 
  }

  // calculate value and show result
  findTotal();

  // clear data from inputs
  invoiceForm.reset();

  // show table
  showtable();
});

// delete function
app.addEventListener("click", event => {
  const currentElement = event.target;
  if (currentElement.classList.contains("del-btn")) {
    // delet the row when delet button have been clicked
    currentElement.closest("tr").remove();
    findTotal();
    showtable();
  }
});

// Add New Service function
addServiceOpenBtn.addEventListener("dblclick", () => {
  addServiceModal.classList.remove("d-none");
});

addServiceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("U are adding new service"); 
  console.dir(event.target);// event.target returns HTMLFormElement

  // get client input data from 'from inputs' using FormData API
  const formData = new FormData(event.target); // FormData needs HTMLFormElement
  console.log(formData.get("serviceTitle"), formData.get("servicePrice"));

  // dynamic id for new service object
  const id = Date.now();

  // add new Service object to Services Object Array - REST
  services.push({
    id,
    title: formData.get("serviceTitle"),
    price: formData.get("servicePrice")
  });

  // add new Service as new option to Select Box
  selectService.append(new Option(formData.get("serviceTitle"), id));

  // clear form data
  event.target.reset();

  // close Modal
  addServiceModal.classList.add("d-none");
});

