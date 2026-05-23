document.addEventListener('DOMContentLoaded', function() {
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', function() {
            chips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


document.querySelectorAll('.btn-dark.flex-grow-1').forEach(button => {
    button.addEventListener('click', function() {
        this.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Menambahkan...';
        setTimeout(() => {
            alert('Produk berhasil ditambahkan ke keranjang!');
            this.innerHTML = 'Tambah ke Keranjang';
        }, 1000);
    });
});




