const modal = document.getElementById("myModal");
const closeModal = document.getElementById("closeModal");
modal.showModal();

closeModal.addEventListener("click", () => {
    modal.close();
})