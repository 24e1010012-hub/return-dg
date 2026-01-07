//logo-scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-content'); 
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    }
});

// Header JS
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    }
});

// Modal JS
    // Bag
    const bagIcon = document.querySelector('#icon-bag');
        const bagModal = document.getElementById('bagModal');
        const closeBtn = document.getElementById('closeBag');

        bagIcon.addEventListener('click', () => {
            bagModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeBtn.addEventListener('click', () => {
            bagModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        bagModal.addEventListener('click', (e) => {
            if (e.target === bagModal) {
                bagModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    // Search
    const searchIcon = document.querySelector('#icon-search-long');
        const searchText = document.querySelector('.js-search-open');
        const searchModal = document.getElementById('searchModal');
        const closeSearch = document.getElementById('closeSearch');

        const openSearch = () => {
            searchModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeSearchModal = () => {
            searchModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        };

        searchIcon.addEventListener('click', openSearch);
        searchText.addEventListener('click', openSearch);
        closeSearch.addEventListener('click', closeSearchModal);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeSearchModal();
        });