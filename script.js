document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let country = document.getElementById("country").value;

    if (!name || !email || !phone || !country) {
        alert("All fields are required!");
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be 10 digits.");
        return;
    }

    alert("Form submitted successfully!");
});




const images = [
    "https://images.unsplash.com/photo-1604136514790-b27086f6c36e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1605299670824-00515e81b924?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1593054538306-3e61b738a10c?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1602780374996-8c6499ce7420?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1590327272286-120057714e11?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

let currentIndex = 0;
const carousel = document.getElementById("carousel");

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    carousel.style.backgroundImage = `url('${images[currentIndex]}')`;
}

// Change background every 5 seconds
setInterval(changeBackground, 2000);







document.addEventListener("DOMContentLoaded", function () {
    lucide.createIcons(); // Initializes icons after DOM is ready
});

const benefits = [
    {
        title: "World-Class Education",
        description: "Access to internationally recognized medical programs",
        icon: "graduation-cap"
    },
    {
        title: "Global Recognition",
        description: "Degrees accepted worldwide for medical practice",
        icon: "globe-2"
    },
    {
        title: "Affordable Fees",
        description: "Cost-effective education without compromising quality",
        icon: "badge-dollar-sign"
    },
    {
        title: "Modern Infrastructure",
        description: "State-of-the-art facilities and laboratories",
        icon: "building-2"
    },
    {
        title: "Easy Admission",
        description: "Simplified admission process with guidance",
        icon: "user-check"
    },
    {
        title: "Clinical Experience",
        description: "Hands-on training in affiliated hospitals",
        icon: "stethoscope"
    }
];

// Function to render benefits
function renderBenefits() {
    const container = document.getElementById("benefits-container");

    benefits.forEach((benefit, index) => {
        // Create card element
        const card = document.createElement("div");
        card.className = `
        bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center 
        transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl
    `;

        // Add AOS animation
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-delay", index * 100); // Delay effect for each card

        // Create Lucide icon element
        const icon = document.createElement("i");
        icon.setAttribute("data-lucide", benefit.icon);
        icon.className = "h-12 w-12 text-black-500 mb-4";

        // Insert content
        card.innerHTML = `
            <h3 class="text-xl font-semibold mb-2">${benefit.title}</h3>
            <p class="text-gray-600">${benefit.description}</p>
        `;

        // Append icon before the text
        card.prepend(icon);
        container.appendChild(card);
    });

    // Activate Lucide icons after elements are added to the DOM
    lucide.createIcons();
}

// Call function on page load
document.addEventListener("DOMContentLoaded", () => {
    renderBenefits();
    AOS.init(); // Initialize AOS for scroll animations
});
 


const countries = [
    { name: "Russia", image: "https://flagcdn.com/w320/ru.png", features: ["6-Year Program", "English Medium", "Affordable Fees"] },
    { name: "Kazakhstan", image: "https://flagcdn.com/w320/kz.png", features: ["Recognition Worldwide", "Modern Facilities", "Quality Education"] },
    { name: "Philippines", image: "https://flagcdn.com/w320/ph.png", features: ["US Pattern Education", "Clinical Rotations", "English Medium"] },
    { name: "Georgia", image: "https://flagcdn.com/w320/ge.png", features: ["European Standards", "Advanced Infrastructure", "Low Living Cost"] },
    { name: "Kyrgyzstan", image: "https://flagcdn.com/w320/kg.png", features: ["Affordable Education", "Indian Food Available", "Safe Environment"] },
    { name: "China", image: "https://flagcdn.com/w320/cn.png", features: ["Globally Recognized", "Modern Equipment", "Low Fees"] },
    { name: "Ukraine", image: "https://flagcdn.com/w320/ua.png", features: ["European Degree", "Strong Medical Curriculum", "Affordable"] },
    { name: "Nepal", image: "https://flagcdn.com/w320/np.png", features: ["Neighboring Country", "Indian Syllabus", "English Medium"] }
];


// Function to render country cards
function renderCountries() {
    const container = document.getElementById("countries-container");
    container.innerHTML = ""; 
    container.className = "flex flex-wrap justify-center gap-6 p-6";  

    countries.forEach(({ name, image, features }) => {
        const card = document.createElement("div");
        card.className = "relative w-80 h-44 overflow-hidden rounded-lg shadow-lg transition-all duration-500 group";  

        card.innerHTML = `
            <div class="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
            <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="${image}" alt="${name}">
            
            <div class="absolute inset-0 flex items-center justify-center text-white text-xl font-bold group-hover:opacity-0 transition-opacity duration-500">
                ${name}
            </div>

            <div class="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                <ul class="text-center space-y-2">
                    ${features.map(feature => `<li class="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">${feature}</li>`).join('')}
                </ul>
            </div>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderCountries);


const steps = [
    {
        number: "01",
        title: "Document Submission",
        description: "Submit your academic documents and passport"
    },
    {
        number: "02",
        title: "Application Review",
        description: "Your application will be reviewed by the university"
    },
    {
        number: "03",
        title: "Admission Letter",
        description: "Receive official admission letter from university"
    },
    {
        number: "04",
        title: "Visa Process",
        description: "Apply for student visa with our guidance"
    }
];

function renderProcessSteps() {
    const container = document.getElementById("process-container");

    steps.forEach((step, index) => {
        const stepDiv = document.createElement("div");
        stepDiv.className = "relative bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300";

        stepDiv.innerHTML = `
            <div class="text-6xl font-bold text-gray-700/20 mb-4">${step.number}</div>
            <h3 class="text-xl font-semibold mb-2">${step.title}</h3>
            <p class="text-gray-600">${step.description}</p>
            ${
                index >= 3 && index < steps.length - 1 
                ? '<div class="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gray-200 -z-10"></div>' 
                : ''
            }
        `;

        container.appendChild(stepDiv);
    });
}



document.addEventListener("DOMContentLoaded", renderProcessSteps);





