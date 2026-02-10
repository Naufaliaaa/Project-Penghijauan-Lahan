// Initialize EmailJS
(function() {
    emailjs.init({
        publicKey: "YOUR_PUBLIC_KEY_HERE" // Silakan ganti dengan kunci publik Anda di sini
    });
})();

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Fungsi menu hamburger
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Tutup menu saat mengklik tautan
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Tombol Scroll ke Atas
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Intersection Observer untuk animasi
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Amati semua bagian
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = '0.8s ease-out';
    observer.observe(section);
});

// Fungsi Filter Portofolio
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Hapus kelas aktif dari semua tombol
        filterBtns.forEach(b => b.classList.remove('active'));
        // Tambahkan kelas aktif ke tombol yang diklik
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.classList.remove('hidden');
                item.style.animation = 'scaleUp 0.6s ease-out';
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Validasi Formulir dan Pengiriman dengan EmailJS
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Dapatkan nilai formulir
    const userName = document.getElementById('user_name').value.trim();
    const userEmail = document.getElementById('user_email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validasi
    if (!userName || !userEmail || !message) {
        alert('Harap isi semua kolom yang wajib diisi');
        return;
    }

    // Tampilkan status loading
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Mengirim...';
    submitBtn.disabled = true;

    // Siapkan parameter email
    const templateParams = {
        to_email: 'naufalzul45@gmail.com',
        from_email: userEmail,
        user_name: userName,
        message: message,
        reply_to: userEmail
    };

    // Kirim email menggunakan EmailJS
    emailjs.send('service_YOUR_SERVICE_ID', 'template_YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            // Berhasil
            console.log('Email berhasil terkirim!', response);
            alert('Pesan berhasil terkirim');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, function(error) {
            // Gagal
            console.error('Pengiriman email gagal:', error);
            alert('Tidak dapat mengirim pesan');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
});

// Gulir halus untuk tautan navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efek paralaks untuk bagian hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.backgroundPosition = `0px ${scrolled * 0.5}px`;
    }
});

// Tambahkan animasi saat menggulir
const animateOnScroll = () => {
    const elements = document.querySelectorAll('[class*="animate"]');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('show');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Animasi penghitung untuk statistik
const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / speed;

        const updateCount = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current);
                setTimeout(updateCount, 10);
            } else {
                counter.textContent = target;
            }
        };

        updateCount();
    });
};

// Tambahkan efek partikel dinamis
const createParticles = () => {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = `rgba(255, 255, 255, ${Math.random()})`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${5 + Math.random() * 10}s infinite`;
        particle.style.pointerEvents = 'none';
        hero.appendChild(particle);
    }
};

// Navigasi keyboard
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Inisialisasi animasi saat halaman dimuat
window.addEventListener('load', () => {
    animateOnScroll();
    createParticles();
});

// Tambahkan indikator progres gulir
const createScrollProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '3px';
    progressBar.style.background = 'linear-gradient(90deg, #0ea5e9, #0284c7)';
    progressBar.style.zIndex = '999';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
};

createScrollProgressBar();

// Tambahkan efek hover ke item portofolio
const portfolioItemsHover = document.querySelectorAll('.portfolio-item');
portfolioItemsHover.forEach(item => {
    item.addEventListener('mouseenter', function() {
        portfolioItemsHover.forEach(i => {
            if (i !== this) {
                i.style.opacity = '0.6';
            }
        });
    });

    item.addEventListener('mouseleave', function() {
        portfolioItemsHover.forEach(i => {
            i.style.opacity = '1';
        });
    });
});

// Navbar shadow saat menggulir
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Lazy loading untuk gambar
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.animation = 'fadeIn 0.6s ease-in';
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Indikator tautan navigasi aktif
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

console.log('Website portofolio berhasil dimuat!');

