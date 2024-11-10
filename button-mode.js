// Membuat tombol mode
const modeButton = document.createElement('button');
modeButton.textContent = "Dark Mode";
modeButton.style.padding = '10px 20px';
modeButton.style.fontSize = '16px';
modeButton.style.border = 'none';
modeButton.style.cursor = 'pointer';
modeButton.style.borderRadius = '5px';
modeButton.style.backgroundColor = '#333';
modeButton.style.color = '#FFF';
modeButton.style.transition = 'all 0.3s ease';

// Menambahkan tombol ke body
document.body.appendChild(modeButton);

// Menambahkan gaya default untuk mode terang
document.body.style.backgroundColor = '#FFF';
document.body.style.color = '#333';
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.transition = 'all 0.3s ease';

// Fungsi toggle untuk beralih mode
modeButton.addEventListener('click', function() {
  if (modeButton.textContent === "Dark Mode") {
    // Ubah ke Mode Gelap
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#FFF';
    modeButton.textContent = "Light Mode";
    modeButton.style.backgroundColor = '#FFF';
    modeButton.style.color = '#333';
  } else {
    // Ubah ke Mode Terang
    document.body.style.backgroundColor = '#FFF';
    document.body.style.color = '#333';
    modeButton.textContent = "Dark Mode";
    modeButton.style.backgroundColor = '#333';
    modeButton.style.color = '#FFF';
  }
});
