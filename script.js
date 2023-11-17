const button = document.querySelector("button")
const modal = document.querySelector('dialog')
const buttonClose = document.querySelector("#close")

button.onclick = function() {
    modal.showModal()
    document.body.classList.add('modal-opened');
}

buttonClose.onclick = function() {
    modal.close()
    document.body.classList.remove('modal-opened');
}