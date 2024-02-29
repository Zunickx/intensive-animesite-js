const modal = () => {
    const modal = document.querySelector('.search-model');
    const modalBtn = document.querySelector('.icon_search');
    const modalClose = modal.querySelector('.search-close-switch'); // ищем не в document, а в  modal
    const modalEntryField = modal.querySelector('input');
    // console.log(modalEntryField);
    // console.log(modalEntryField.value);

    modalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

modal();