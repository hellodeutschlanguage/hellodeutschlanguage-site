document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu && menuIconOpen && menuIconClose) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuIconOpen.classList.add('hidden');
        menuIconClose.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      });
    });
  }

  // Hash Routing
  const homeView = document.getElementById('home-view');
  const privacyPolicyView = document.getElementById('privacy-policy-view');
  const termsOfServiceView = document.getElementById('terms-of-service-view');

  function handleHashChange() {
    const hash = window.location.hash;
    
    if (homeView && privacyPolicyView && termsOfServiceView) {
      if (hash === '#privacy-policy') {
        homeView.style.display = 'none';
        privacyPolicyView.style.display = 'block';
        termsOfServiceView.style.display = 'none';
        window.scrollTo(0, 0);
      } else if (hash === '#terms-of-service') {
        homeView.style.display = 'none';
        privacyPolicyView.style.display = 'none';
        termsOfServiceView.style.display = 'block';
        window.scrollTo(0, 0);
      } else {
        homeView.style.display = 'block';
        privacyPolicyView.style.display = 'none';
        termsOfServiceView.style.display = 'none';
        
        // If there's a hash that isn't privacy/terms, try to scroll to it
        if (hash && hash !== '#') {
          const element = document.querySelector(hash);
          if (element) {
            // Small timeout to allow display:block to take effect
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            }, 10);
          }
        }
      }
    }
  }

  window.addEventListener('hashchange', handleHashChange);
  
  // Initial check
  handleHashChange();
});
