const getOrder = () =>
  fetch('/api/Order', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

const saveOrder = (Order) =>
  fetch('/api/Order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Order),
  });

const deleteOrder = (id) =>
  fetch(`/api/Order/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });