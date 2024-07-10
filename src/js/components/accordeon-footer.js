export const accordeonFooter = () => {
  document.querySelectorAll('.footer__item-title').forEach((title) => {
    title.addEventListener('click', function () {
      const sublist = this.nextElementSibling;


      const isActive = sublist.classList.contains('footer__sublist--active');


      document.querySelectorAll('.footer__sublist').forEach((list) => {
        list.classList.remove('footer__sublist--active');
        list.style.maxHeight = null;
      });


      if (!isActive) {
        sublist.classList.add('footer__sublist--active');
        sublist.style.maxHeight = sublist.scrollHeight + 'px';
      }
    });
  });

  function checkWidth() {
    if (window.innerWidth > 380) {
      document.querySelectorAll('.footer__sublist').forEach((list) => {
        list.classList.add('footer__sublist--active');
        list.style.maxHeight = null;
      });
    } else {
      document.querySelectorAll('.footer__sublist').forEach((list) => {
        list.classList.remove('footer__sublist--active');
        list.style.maxHeight = null;
      });
    }
  }

  // Initial check
  checkWidth();

  // Check on resize
  window.addEventListener('resize', checkWidth);
};
