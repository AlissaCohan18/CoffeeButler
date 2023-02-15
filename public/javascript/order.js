const getOrder = () =>
  fetch('/api/order', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

const saveOrder = (order) =>
  fetch('/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });

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