// Membuat elemen modal dengan JavaScript
const modalOverlay = document.createElement('div');
const modalBox = document.createElement('div');
const modalTitle = document.createElement('h2');
const modalContent = document.createElement('p');
const closeButton = document.createElement('button');
const openButton = document.createElement('button');

// Menyusun struktur modal
modalTitle.innerText = 'Modal Title';
modalContent.innerText = 'This is a simple modal pop-up created with pure JavaScript.';
closeButton.innerText = 'Close';
openButton.innerText = 'Open Modal';

// Menambahkan elemen modal ke dalam modalBox
modalBox.appendChild(modalTitle);
modalBox.appendChild(modalContent);
modalBox.appendChild(closeButton);

// Menyusun modal overlay
modalOverlay.appendChild(modalBox);

// Menyembunyikan modal di awal
modalOverlay.style.display = 'none';

// Menambahkan modal dan tombol buka ke dalam body
document.body.appendChild(modalOverlay);
document.body.appendChild(openButton);

// Menambahkan CSS secara langsung melalui JavaScript
document.body.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    margin: 0;
`;

modalOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

modalBox.style.cssText = `
    background-color: #fff;
    width: 300px;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

closeButton.style.cssText = `
    background-color: #ff5c5c;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
`;

openButton.style.cssText = `
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

// Fungsi untuk membuka modal
openButton.onclick = function() {
    modalOverlay.style.display = 'flex';
};

// Fungsi untuk menutup modal
closeButton.onclick = function() {
    modalOverlay.style.display = 'none';
};

// Fungsi untuk menutup modal saat mengklik di luar modal box
window.onclick = function(event) {
    if (event.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
};
