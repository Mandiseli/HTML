const showPopupButton = document.getElementById('showPopup');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('closePopup');

showPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close the popup if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
