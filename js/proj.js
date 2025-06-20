let counter = 1;

let box = document.getElementById("portfolio-box");
let imgBox = document.getElementById("img-slide");

let Projects = [
    {
        headProj: "Pack&Go E-commerce",
        descProj: "Complete e-commerce website for travel bags and accessories, featuring responsive web design for mobile and desktop. Integrated Firebase authentication with Google sign-in, secure checkout with PayPal, and Firestore for real-time order tracking. Included admin dashboard for product and user management.",
        techProj: "HTML, CSS, JavaScript | Firebase Authentication | Firestore | PayPal API | Hosting netlify.com",
        demoProj: "https://packgotrial.netlify.app/",
        githubProj: "https://github.com/Badawy24/Pack-Go",
        imgProj: "./img/projects/packandgo.png",
    },
    {
        headProj: "Early Detection of ASD",
        descProj: "Inclusive website for early autism diagnosis and support, featuring a user-friendly, responsive design for both web and mobile. Integrated bilingual support (Arabic and English) to enhance accessibility. Implemented machine learning models to assist in early detection and analysis, improving diagnostic accuracy. Ensured clear guidelines and secure handling of sensitive data. ",
        techProj: "HTML, CSS, JavaScript, Bootstrap | PHP (Laravel framework) | MySQL | Python | Flask ",
        demoProj: "",
        githubProj: "https://github.com/Badawy24/Autism_Graduation_Project",
        imgProj: "./img/projects/01.png",
    },
    {
        headProj: "HairPilot Salon With AI",
        descProj: "Smart Angular-based web app for personalized haircut suggestions using AI-powered face shape detection. Features include real-time recommendations with visual previews, online salon booking stored in Firestore, form validation, and a responsive UI. Includes service galleries, booking system, and organized navigation.",
        techProj: "Angular | face-api.js | Firebase Firestore | HTML, CSS, Bootstrap",
        demoProj: "https://hair-pilot.vercel.app/home",
        githubProj: "https://github.com/Badawy24/HairPilot",
        imgProj: "./img/projects/hairpilot.png"
    },
    {
        headProj: "Coffee Corner Landing Page",
        descProj: "Designed and developed a modern, responsive landing page for a coffee shop using vanilla HTML, CSS, and JavaScript. Features smooth scrolling, a clean menu layout with product images and pricing, and optimized responsiveness across all devices. Perfect for showcasing services and engaging customers online.",
        techProj: "HTML, CSS, JavaScript | Google Fonts | Animations",
        demoProj: "https://badawy24.github.io/Coffee_Corner/",
        githubProj: "https://github.com/Badawy24/Coffee_Corner",
        imgProj: "./img/projects/coffeecorner.png"
    },

];

Projects.forEach((project) => {
    box.innerHTML += `
        <div class="portfolio-details ${counter === 1 ?'active':''}">
            <p class="numb">${counter}</p>
            <h3>${project.headProj}</h3>
            <p>${project.descProj}</p>
            <div class="tech">
                <p>${project.techProj}</p>
            </div>
            <div class="live-github">
                <a href="${project.demoProj}" target="_blank">
                    <i class='bx bx-arrow-back'></i>
                </a>
                <a href="${project.githubProj}" target="_blank">
                    <i class='bx bxl-github'></i>
                </a>
            </div>
        </div>
    `;
    imgBox.innerHTML += `
        <div class="img-item">
            <img src="${project.imgProj}" alt="slide${counter}">
        </div>
    `;
    counter++;
});

// ************************************************
let arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
let arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let currentSlide = 0;

let activePortfolio = () => {
    let imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    let portfolioDetails = document.querySelectorAll('.portfolio-details');


    imgSlide.style.transform = `translateX(calc(${currentSlide * -100}% - ${currentSlide * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[currentSlide].classList.add('active');

}

arrowRight.addEventListener('click', () => {
    if (currentSlide < Projects.length - 1) {
        currentSlide++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});
arrowLeft.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        arrowRight.classList.remove('disabled');
    }
    else {
        currentSlide = 0;
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});