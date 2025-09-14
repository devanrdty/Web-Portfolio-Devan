const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');

mobileMenuButton.addEventListener('click', () => {
    const isMenuOpen = mobileMenu.classList.toggle('active');
    hamburgerIcon.classList.toggle('hidden', isMenuOpen);
    closeIcon.classList.toggle('hidden', !isMenuOpen);
});

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

    blogModalCloseButton.addEventListener('click', closeBlogModal);

    blogModal.addEventListener('click', (event) => {
        if (event.target === blogModal) {
            closeBlogModal();
        }
    });
}
