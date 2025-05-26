document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('service_rt70kvx', 'template_vxv5i9c', this)
    .then(() => {
      alert('Message sent successfully!');
      this.reset();
    }, (error) => {
      alert('Failed to send message. Please try again later.');
      console.error('EmailJS error:', error);
    });
});

//////////////

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    document.querySelectorAll(".filter-btn").forEach(btn =>
      btn.classList.remove("active")
    );
    button.classList.add("active");

    document.querySelectorAll(".portfolio-item").forEach(item => {
      item.style.display =
        filter === "all" || item.classList.contains(filter) ? "block" : "none";
    });
  });
});

////////////////

const modal = document.getElementById('imageModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.portfolio-item img').forEach(img => {
  img.addEventListener('click', () => {
    const videoUrl = img.dataset.videoUrl;
    const siteUrl = img.dataset.siteUrl;
    const title = img.dataset.title || 'Website Preview';

    if (videoUrl) {
      // Show YouTube video
      modalContent.innerHTML = `
        <iframe width="800" height="450" 
                src="${videoUrl}?autoplay=1" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>`;
    } else if (siteUrl) {
      // Show website preview image + link
      modalContent.innerHTML = `
        <h3 style="margin-bottom: 1rem; color: white; font-size: 1.5rem;">${title}</h3>
        <img src="${img.src}" alt="${title}" style="max-width: 100%; max-height: 70%; margin-bottom: 1rem;">
        <br>
        <a href="${siteUrl}" target="_blank" style="color: #00e0ff; font-size: 1.2rem; text-decoration: underline;">
          Visit Website
        </a>`;
    } else {
      // Show image
      modalContent.innerHTML = `<img src="${img.src}" alt="Full View" style="max-width: 100%; max-height: 100%;">`;
    }

    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  modalContent.innerHTML = ''; // Clear modal content to stop videos
});

////////////////////////

function toggle_menu() {
    const navItems = document.getElementById("navItems");
    navItems.classList.toggle("show-menu");

    // Toggle document click listener
    if (navItems.classList.contains("show-menu")) {
        document.addEventListener("click", closeMenuOnClickOutside);
    } else {
        document.removeEventListener("click", closeMenuOnClickOutside);
    }
}

function closeMenuOnClickOutside(event) {
    const navItems = document.getElementById("navItems");
    const menuButton = document.getElementById("menu");

    // If click is outside navItems and menu button, close the menu
    if (!navItems.contains(event.target) && !menuButton.contains(event.target)) {
        navItems.classList.remove("show-menu");
        document.removeEventListener("click", closeMenuOnClickOutside);
    }
}

document.querySelectorAll('#navItems a').forEach(link => {
    link.addEventListener('click', () => {
        const navItems = document.getElementById("navItems");
        navItems.classList.remove("show-menu");
        document.removeEventListener("click", closeMenuOnClickOutside);
    });
});