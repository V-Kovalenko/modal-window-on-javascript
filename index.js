'use strict'

const modalWindow = document.querySelector('.modal-window')
const overlay = document.querySelector('.overlay')
const btnCloseModalWindow = document.querySelector('.close-modal-window')
const btnsShowModalWindow = document.querySelectorAll('.show-modal-window')
const checkHiddenClass = modalWindow.classList.contains('hidden')


const openModalWindow = () => {
    modalWindow.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModalWindow = () => {
    modalWindow.classList.add('hidden')
    overlay.classList.add('hidden')
}

const closeModalWindowEscape = (e) => {
    if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
        closeModalWindow()
    }
}
const onClickOpenModalWindow = () => {
    for (let i = 0; i < btnsShowModalWindow.length; i++) {
        btnsShowModalWindow[i].addEventListener('click', openModalWindow)
    }
}
onClickOpenModalWindow()


const onClickCLoseModalWindow = () => {
    btnCloseModalWindow.addEventListener('click', closeModalWindow)
    overlay.addEventListener('click', closeModalWindow)
}
onClickCLoseModalWindow()

document.addEventListener('keydown', closeModalWindowEscape)


