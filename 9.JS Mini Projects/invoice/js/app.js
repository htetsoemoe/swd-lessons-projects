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
const invoiceForm = document.querySelector("#invoiceForm")
const selectService = document.querySelector("#selectService");// selector
const qunatity = document.querySelector("#quantity");
const lists = document.querySelector("#lists");// table body
const subTotal = document.querySelector("#subTotal");
const tax = document.querySelector("#tax");
const total = document.querySelector("#total");


// logics
// add services to select option
services.forEach(service => {
    selectService.append(new Option(service.title, service.id));
});

// create row with data in table
const createTr = (service, qunatity) => {
    const tr = document.createElement("tr");
    const total = service.price * qunatity;
    tr.innerHTML = `
        <td>${service.title}</td>
        <td class="text-end">${qunatity}</td>
        <td class="text-end">${service.price}</td>
        <td class="text-end list-total">${total}</td>
    `;

    return tr;
};

// calculate tax
const calculateTax = (amount, percentage = 5) => {
    return amount * (percentage/100);
}

// calculate total
const findTotal = () => {
    // const listTotal = document.querySelectorAll(".list-total");
    let valueOfSubTotal = [...document.querySelectorAll(".list-total")].reduce((pv,cv)=> pv + parseFloat(cv.innerText), 0);
   
    subTotal.innerText = valueOfSubTotal;
    tax.innerText = calculateTax(valueOfSubTotal);
    total.innerText = valueOfSubTotal + calculateTax(valueOfSubTotal);

};

// get all data from 'form inputs'
invoiceForm.addEventListener("submit", event => {
    event.preventDefault();

    //console.log(selectService.value, qunatity.valueAsNumber, selectedService);
    
    // find selected service object 
    const selectedService = services.find(service => service.id == selectService.value);
    console.log(selectedService);

    // generate row 
    lists.append(createTr(selectedService, qunatity.valueAsNumber));

    // calculate value and show result
    findTotal();

    // clear data from inputs
    invoiceForm.reset();
})

