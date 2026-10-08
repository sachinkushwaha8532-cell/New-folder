const form = document.getElementById("marketingForm");
const result = document.getElementById("result");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    // GET USER INPUT

    const businessName =
        document.getElementById("businessName").value;

    const businessType =
        document.getElementById("businessType").value;

    const location =
        document.getElementById("location").value;

    const budget =
        document.getElementById("budget").value;

    const goal =
        document.getElementById("goal").value;


    // BUSINESS RECOMMENDATIONS

    let recommendations = [];

    let campaign = "";


    // BUSINESS TYPE

    if (businessType === "restaurant") {

        recommendations = [
            "Create Google Business Profile and keep opening hours updated.",
            "Post food photos and short videos on Instagram.",
            "Run location-based Instagram promotions.",
            "Encourage customers to leave Google reviews.",
            "Create weekend or festival-based offers."
        ];

        campaign =
            "Weekend Special: Offer a limited-time combo and promote it within your local area.";

    }


    else if (businessType === "retail") {

        recommendations = [
            "Create and optimize your Google Business Profile.",
            "Post new products and offers on Instagram.",
            "Use WhatsApp Business for customer communication.",
            "Create local festival and seasonal offers.",
            "Use customer reviews to build trust."
        ];

        campaign =
            "Local Shopping Week: Promote selected products with a limited-time discount.";

    }


    else if (businessType === "salon") {

        recommendations = [
            "Upload before-and-after style posts on Instagram.",
            "Create a Google Business Profile.",
            "Offer referral discounts to existing customers.",
            "Use WhatsApp for appointment reminders.",
            "Promote special packages for local customers."
        ];

        campaign =
            "Refer & Earn: Existing customers receive a special offer for referring a new customer.";

    }


    else if (businessType === "fitness") {

        recommendations = [
            "Post workout tips and transformation stories.",
            "Create a Google Business Profile.",
            "Offer a free trial session.",
            "Use Instagram Reels for local awareness.",
            "Create referral campaigns for existing members."
        ];

        campaign =
            "7-Day Fitness Trial: Offer local customers a free introductory fitness session.";

    }


    else if (businessType === "education") {

        recommendations = [
            "Create educational content on Instagram and YouTube.",
            "Optimize your Google Business Profile.",
            "Offer a free demo class.",
            "Use WhatsApp for student enquiries.",
            "Promote results, testimonials and success stories."
        ];

        campaign =
            "Free Demo Week: Allow local students to attend one free demo class.";

    }


    else {

        recommendations = [
            "Create and optimize your Google Business Profile.",
            "Build an active Instagram presence.",
            "Use WhatsApp Business for customer communication.",
            "Collect customer reviews.",
            "Run location-based digital promotions."
        ];

        campaign =
            "Local Customer Week: Provide a special introductory offer to customers in your area.";

    }


    // BUDGET STRATEGY

    let budgetText = "";

    if (budget === "low") {

        budgetText = `
            Google Business Profile: Free<br>
            Instagram Content: ₹500–₹1,000<br>
            Local Promotion: ₹1,000–₹2,000
        `;

    }

    else if (budget === "medium") {

        budgetText = `
            Social Media Ads: ₹3,000<br>
            Content Creation: ₹2,000<br>
            Local Offers: ₹1,000–₹2,000<br>
            Google Promotion: ₹1,000
        `;

    }

    else {

        budgetText = `
            Social Media Ads: ₹8,000<br>
            Content Creation: ₹5,000<br>
            Google Ads: ₹5,000<br>
            Influencer/Local Promotion: ₹2,000–₹5,000
        `;

    }


    // GOAL

    let goalText = "";

    if (goal === "customers") {

        goalText =
            "Focus on Google Maps, local ads, reviews and referral campaigns.";

    }

    else if (goal === "awareness") {

        goalText =
            "Focus on Instagram Reels, local content and location-based advertising.";

    }

    else if (goal === "sales") {

        goalText =
            "Focus on discounts, limited-time offers and retargeting.";

    }

    else {

        goalText =
            "Focus on Google Business Profile, Instagram and WhatsApp Business.";

    }


    // SCORE

    let score = 75;

    if (budget === "medium") {
        score += 5;
    }

    if (budget === "high") {
        score += 10;
    }

    if (goal === "customers") {
        score += 5;
    }


    // DISPLAY RESULT

    result.innerHTML = `

        <h3 class="result-title">
            🤖 ${businessName}
        </h3>

        <p class="business-location">
            📍 ${location}
        </p>


        <div class="score-box">

            <strong>${score}/100</strong>

            <p>
                Recommended Marketing Potential
            </p>

        </div>


        <h4>🎯 Recommended Strategy</h4>

        <p style="margin-top:8px; color:#666; font-size:14px;">
            ${goalText}
        </p>


        <ul class="recommendation-list">

            ${recommendations
                .map(item => `<li>✓ ${item}</li>`)
                .join("")}

        </ul>


        <div class="budget-box">

            <h4>💰 Suggested Budget Allocation</h4>

            <p style="line-height:1.8; font-size:14px;">
                ${budgetText}
            </p>

        </div>


        <div class="campaign">

            <strong>💡 Campaign Idea</strong>

            <p style="margin-top:8px; font-size:14px;">
                ${campaign}
            </p>

        </div>

    `;


    // SCROLL TO RESULT

    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});