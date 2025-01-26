document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.product-item button');
    const cartItems = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    let totalPrice = 0;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            const productPrice = parseInt(this.getAttribute('data-price'));

            // Tambahkan produk ke daftar keranjang
            const listItem = document.createElement('li');
            listItem.textContent = `${productName} - Rp ${productPrice.toLocaleString()}`;
            cartItems.appendChild(listItem);

            // Perbarui total harga
            totalPrice += productPrice;
            totalPriceEl.textContent = totalPrice.toLocaleString();

            // Tampilkan notifikasi
            alert(`Pesanan Anda ${productName} telah masuk ke keranjang!`);
        });
    });

    // Formulir kontak
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        
        if (name && email && message) {
            alert('Pesan Anda telah dikirim!\nNama: ' + name + '\nEmail: ' + email + '\nPesan: ' + message);
            form.reset();
        } else {
            alert('Mohon lengkapi semua kolom pada formulir.');
        }
    });

    // Smooth scrolling for sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Tombol Checkout mengarahkan ke situs web foom.id
    const checkoutButton = document.getElementById('checkout');
    checkoutButton.addEventListener('click', function() {
        window.location.href = 'https://foom.id';
    });
});
