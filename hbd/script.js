document.addEventListener('DOMContentLoaded', () => {
    const book = document.querySelector('.book');
    const cover = document.getElementById('cover');
    const pages = document.querySelectorAll('.page');

    cover.addEventListener('click', () => {
        // Menambahkan kelas 'active' ke elemen 'book'
        book.classList.add('active');

        // Semua halaman akan berbalik secara instan
        pages.forEach((page, index) => {
            page.style.transform = `rotateY(-180deg)`;
            // Mengatur z-index agar halaman di belakang maju ke depan
            // Ini tetap diperlukan agar halaman tampil dengan benar
            page.style.zIndex = pages.length - index;
        });
    });
});
