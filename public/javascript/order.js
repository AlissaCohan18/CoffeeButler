// let placeOrderBtn = document.querySelector('#pobtn');
// let cancelOrderBtn = document.querySelector('#cancelO');
// let reorderBtn = document.querySelector('#reorder');


// TODO create event listener to append to pending orders section
// TODO 

// let newOrder = document.querySelector('#inputorder');




// const getOrder = () =>
//   fetch('/api/order', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

  
// const saveOrder = (order) =>
//   fetch('/api/order', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(order),
//   }
//   // append to Pending Orders
//   );

  async function saveOrder(event) {
    event.preventDefault();
    console.log('We want to finish.')
  
    const drink = document.querySelector("#inputorder").value.trim();
  
    if (drink) {
      const response = await fetch("/api/order", {
        method: "post",
        body: JSON.stringify({
          drink,
        }),
        headers: { "Content-Type": "application/json" },
      });
    }
  };

  // event listener
      document
        .querySelector("#pobtn")
        .addEventListener("click", saveOrder);

const deleteOrder = (id) =>
  fetch(`/api/order/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

//   let newOrder = "";
// function placeOrder(event) {
//     //once order is placed it is saved to db
//     //post 
// }
// function deleteOrder() {
//   //delete request 
// }

//   document.getElementById('reorder').addEventListener('click', placeOrder, true);

//   document.getElementById('delete').addEventListener('click',deleteOrder, true);

//   document.getElementById('order').addEventListener('click', placeOrder, true);