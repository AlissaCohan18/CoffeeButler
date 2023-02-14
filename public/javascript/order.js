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