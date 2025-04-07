// js/scripts.js

function initHeaderScripts() {
    // Toggle mobile menu
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Razorpay setup
    const razorpayOptions = {
        "key": "rzp_test_qAWWHs1nTN9jVx",
        "amount": 50000,
        "currency": "INR",
        "name": "Shri Yog Abhyas Ashram Trust",
        "description": "Donation for Yoga Welfare",
        "image": "images/logo-white.png",
        "handler": function (response) {
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        },
        "prefill": {
            "name": "Your Name",
            "email": "your-email@example.com",
            "contact": "9876543210"
        },
        "theme": {
            "color": "#f97316"
        }
    };

    const donateBtn = document.getElementById("donate-button");
    const donateBtnMobile = document.getElementById("donate-button-mobile");

    function openDonation() {
        const rzp = new Razorpay(razorpayOptions);
        rzp.open();
    }

    if (donateBtn) {
        donateBtn.addEventListener("click", function (e) {
            e.preventDefault();
            openDonation();
        });
    }

    if (donateBtnMobile) {
        donateBtnMobile.addEventListener("click", function (e) {
            e.preventDefault();
            openDonation();
        });
    }
}
