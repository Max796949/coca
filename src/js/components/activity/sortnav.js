export const sortNav = () => {
    const navItems = document.querySelectorAll('.hero__nav-item-sort');
    const slides = document.querySelectorAll('.swiper-slide');

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const filter = item.dataset.filter;

        // Remove active class from all slides
        slides.forEach(slide => slide.classList.remove('active'));

        // Add active class to matching slides
        slides.forEach(slide => {
          if (filter === 'all' || slide.classList.contains(filter)) {
            slide.classList.add('active');
          }
        });
      });
    });
}