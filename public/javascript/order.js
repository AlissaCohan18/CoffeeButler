
let placeOrderBtn = document.querySelector('#pobtn');
let cancelOrderBtn = document.querySelector('#cancelO');
let reorderBtn = document.querySelector('#reorder');
let newOrder = document.querySelector('#inputorder');





// const getOrder = () =>
//   fetch('/api/order', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });


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

      document.getElementById("pobtn").addEventListener("click", saveOrder);




      
const deleteOrder = (id) =>
  fetch(`/api/order/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  
