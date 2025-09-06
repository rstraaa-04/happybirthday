document.addEventListener('DOMContentLoaded', () => {
    const bookContainer = document.querySelector('.book-container');
    const openButton = document.getElementById('open-button');
    const cover = document.getElementById('cover');
    const pages = document.querySelectorAll('.page');

    openButton.addEventListener('click', () => {
        // Menambahkan kelas 'active' saat tombol diklik
        bookContainer.classList.add('active');
        openButton.style.display = 'none'; // Sembunyikan tombol 'Open'

        // Memutar halaman secara instan saat dibuka
        pages.forEach((page, index) => {
            page.style.transform = `rotateY(-180deg)`;
            page.style.zIndex = pages.length - index;
        });
    });
});
