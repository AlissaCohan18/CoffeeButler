async function saveOrder() {
  console.log("We want to finish.");

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
  location.reload();
}

// event listener
document.getElementById("pobtn").addEventListener("click", saveOrder);

const deleteOrder = (id) =>
  fetch(`/api/order/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
