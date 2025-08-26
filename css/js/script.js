// Contact button action
function contactMe() {
  alert("Thank you for reaching out! I will get back to you soon.");
}

// Calculator action
function calculateTotal() {
  let service = document.getElementById("service").value;
  document.getElementById("result").innerText =
    "Estimated Cost: ₹" + service;
}
