function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    document.getElementById('first_name').focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


export { displayModal, closeModal };