function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function validate() {
    console.log(document.querySelector("#first_name").value);
    console.log(document.querySelector("#last_name").value);
    console.log(document.querySelector("#email").value);
    console.log(document.querySelector("#message").value);
    //console.log(document.querySelector("#form"));
    document.querySelector("#form").submit(function(e){
      e.preventDefault();
    })
  }

/*
document.onkeydown = function(e) {
  if(e.key === "Enter") { 
    document.activeElement.click();
  }
};
*/