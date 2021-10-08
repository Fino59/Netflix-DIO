function projectsModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
        modal.classList.add('show');
        modal.addEventListener('click', (e) => {
            if(e.target.className == 'close') {
                modal.classList.remove('show');
            }
        });
    }
}

const round6 = document.querySelector('.watch');
round6.addEventListener('click', () => projectsModal('round6-modal'));

