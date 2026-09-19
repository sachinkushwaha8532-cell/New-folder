document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (!form) {
        console.log("Form nahi mila");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const inputs = form.querySelectorAll("input, select");

        const businessName = inputs[0]?.value || "Your business";
        const businessType = inputs[1]?.value || "local business";
        const location = inputs[2]?.value || "your area";
        const budget = inputs[3]?.value || "your budget";

        let result = document.querySelector("#recommendation");

        if (!result) {
            result = document.querySelector(".recommendation");
        }

        if (!result) {
            result = document.querySelector(".result");
        }

        if (!result) {
            result = document.createElement("div");
            result.className = "recommendation";
            form.after(result);
        }

        result.innerHTML = `
            <h3>AI Marketing Recommendation</h3>
            <p>
                For <strong>${businessName}</strong>, a
                <strong>${businessType}</strong> in
                <strong>${location}</strong>, we recommend focusing on
                Google Business Profile, Instagram/Facebook marketing,
                local offers, customer reviews and WhatsApp promotion.
            </p>
            <p>
                Your selected marketing budget is
                <strong>RUPEE1000 - RUPEE5000</strong>.
            </p>
        `;
    });

});