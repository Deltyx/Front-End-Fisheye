function displayModal() {
    const modal = document.getElementById("contact_modal");
	  modal.style.display = "block";
    document.getElementById('first_name').focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(document.querySelector("#first_name").value);
  console.log(document.querySelector("#last_name").value);
  console.log(document.querySelector("#email").value);
  console.log(document.querySelector("#message").value);
})
