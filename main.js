document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Logic ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const closeIcon = document.querySelector('.close-icon');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            const isMenuOpen = mobileMenu.classList.toggle('active');
            hamburgerIcon.classList.toggle('hidden', isMenuOpen);
            closeIcon.classList.toggle('hidden', !isMenuOpen);
        });
    }

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    // --- Project Modal Logic ---
    const projectModal = document.getElementById('project-modal');
    if (projectModal) {
        const modalCloseButton = document.getElementById('modal-close-button');
        const projectCards = document.querySelectorAll('.project-card');
        
        const modalImage = document.getElementById('modal-image');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const modalTechPills = document.getElementById('modal-tech-pills');

        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const title = card.dataset.title;
                const image = card.dataset.image;
                const description = card.dataset.description;
                const tech = card.dataset.tech.split(',').map(t => t.trim());

                modalTitle.textContent = title;
                modalImage.src = image;
                modalImage.alt = `Image for ${title}`;
                modalDescription.textContent = description;
                
                modalTechPills.innerHTML = '';
                tech.forEach(techName => {
                    if (techName) {
                        const pill = document.createElement('span');
                        pill.className = 'inline-block bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full';
                        pill.textContent = techName;
                        modalTechPills.appendChild(pill);
                    }
                });

                projectModal.classList.remove('hidden');
            });
        });

        const closeModal = () => {
            projectModal.classList.add('hidden');
        };

        modalCloseButton.addEventListener('click', closeModal);

        projectModal.addEventListener('click', (event) => {
            if (event.target === projectModal) {
                closeModal();
            }
        });
    }

    // --- Blog Modal Logic ---
    const blogModal = document.getElementById('blog-modal');
    if (blogModal) {
        const blogModalCloseButton = document.getElementById('blog-modal-close-button');
        const blogCards = document.querySelectorAll('.blog-card');

        const blogModalTitle = document.getElementById('blog-modal-title');
        const blogModalDate = document.getElementById('blog-modal-date');
        const blogModalContent = document.getElementById('blog-modal-content');

        blogCards.forEach(card => {
            card.addEventListener('click', () => {
                const title = card.dataset.title;
                const date = card.dataset.date;
                const content = card.dataset.content;

                blogModalTitle.textContent = title;
                blogModalDate.textContent = date;
                blogModalContent.innerHTML = content.replace(/\n/g, '<p class="mb-4"></p>');

                blogModal.classList.remove('hidden');
            });
        });

        const closeBlogModal = () => {
            blogModal.classList.add('hidden');
        };

        if(blogModalCloseButton) {
          blogModalCloseButton.addEventListener('click', closeBlogModal);
        }

        blogModal.addEventListener('click', (event) => {
            if (event.target === blogModal) {
                closeBlogModal();
            }
        });
    }

    // --- Blog Filter Logic ---
    const filterContainer = document.querySelector('#blog-filter-buttons');
    if (filterContainer) {
        const filterButtons = filterContainer.querySelectorAll('.filter-btn');
        const blogCards = document.querySelectorAll('#blog-card-grid .blog-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;

                // Update button styles
                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-yellow-300', 'hover:bg-yellow-400');
                    btn.classList.add('bg-white', 'hover:bg-yellow-200');
                });
                button.classList.remove('bg-white', 'hover:bg-yellow-200');
                button.classList.add('bg-yellow-300', 'hover:bg-yellow-400');

                // Filter cards
                blogCards.forEach(card => {
                    const category = card.dataset.category;
                    if (filter === 'semua' || filter === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // --- Scroll Animation Logic ---
    const sections = document.querySelectorAll('.fade-in-section');
    if (sections.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Triggers when at least 10% of the element is visible
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    }

});