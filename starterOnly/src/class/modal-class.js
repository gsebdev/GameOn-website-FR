export default class Modal {

    constructor(modalContainerEl, modalCloseEl, modalOpenEl) {
        
        this.modalContainerEl = modalContainerEl;
        this.modalCloseEl = modalCloseEl;
        this.modalOpenEl = modalOpenEl;
    }

    init() {
        this.modalOpenEl.forEach((el) => el.addEventListener("click", this.open.bind(this)));
        this.modalCloseEl.forEach((el) => el.addEventListener("click", this.close.bind(this)));
    }
    
    open() {
        this.modalContainerEl.style.display = 'block';
    }

    close() {
        this.modalContainerEl.style.display = 'none';
        this.reset(this);
       
    }
    reset() {
        this.modalContainerEl.querySelectorAll('input:not(input[type=submit]').forEach(input => { 
            input.value = '';
            input.checked = false;
          });
    }
}
