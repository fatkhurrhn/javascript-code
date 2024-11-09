// Membuat tombol menggunakan JavaScript
const button = document.createElement('button');

// Menambahkan teks pada tombol
button.textContent = "Click Me!";

// Menambahkan gaya (CSS) langsung menggunakan JavaScript
button.style.padding = '15px 30px';
button.style.fontSize = '18px';
button.style.backgroundColor = '#4CAF50';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
button.style.transition = 'all 0.3s ease';
button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
button.style.outline = 'none';

// Menambahkan tombol ke body
document.body.appendChild(button);

// Efek Hover menggunakan event listener
button.addEventListener('mouseover', function() {
  button.style.backgroundColor = '#45a049';
  button.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)';
  button.style.transform = 'translateY(-3px)';
});

// Efek Hover keluar (mouseout)
button.addEventListener('mouseout', function() {
  button.style.backgroundColor = '#4CAF50';
  button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  button.style.transform = 'translateY(0)';
});

// Efek ketika tombol diklik
button.addEventListener('mousedown', function() {
  button.style.backgroundColor = '#388e3c';
  button.style.transform = 'translateY(1px)';
  button.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
});

// Efek saat tombol dilepaskan
button.addEventListener('mouseup', function() {
  button.style.backgroundColor = '#45a049';
  button.style.transform = 'translateY(0)';
  button.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)';
});

// Menambahkan event listener klik
button.addEventListener('click', function() {
  alert("Button clicked!");
});
