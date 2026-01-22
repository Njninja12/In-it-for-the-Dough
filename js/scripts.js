/* ====================================================================
   SCRIPTS.JS — Main JavaScript File for In It for the Dough Website
   
   SECTIONS:
   1. ITEM DATA - Menu categories and baked goods database
   2. ITEM DETAIL RENDERING - Displays product details on item-detail.html
   3. CONTACT FORM - EmailJS email integration
   4. FEATURED SCROLLER - Auto-scrolling carousel on home page
   5. GALLERY LIGHTBOX - Image preview modal for gallery.html
   
   HOW TO EDIT:
   - To add new menu items: Edit the `items` object below
   - To change EmailJS credentials: Find the EmailJS init section
   - To modify gallery behavior: Scroll to "GALLERY" section
==================================================================== */

/* ====================================================================
   1. ITEM DATA — Menu Categories & Baked Goods Database
   ====================================================================
   
   STRUCTURE: Each category (cakes, breads, etc) contains:
   - title: Category name displayed to customers
   - description: Short explanation of the category
   - categoryLabels: Special features/options available
   - goods: Array of individual items with:
     * name: Product name
     * portionPrices: Array of size/price pairs
     * allergens: List of allergens/dietary concerns
     * labels: Customization options
     
   TO ADD A NEW ITEM: Add an object to the goods array of any category
   TO ADD A NEW CATEGORY: Copy the structure of any existing category
==================================================================== */

const items = {
  cakes: {
    title: "Classic Cakes & Cheesecakes",
    description: "Choose a cake/cheesecake flavor, then pick your size. Customization available.",
    categoryLabels: ["Custom Decorations", "Gluten Free Option", "Sugar Free Option"], // Features available for cakes
    goods: [
      // CAKES AVAILABLE - Add or remove items here
      {
        name: "Chocolate Fudge Cake",
        portionPrices: [{ size: "Custom cake", price: "$40–$55" }], // Size options and pricing
        allergens: ["Gluten", "Eggs", "Dairy"], // Allergen warnings
        labels: ["Customizable"] // What can be customized
      },
      {
        name: "Red Velvet Cake",
        portionPrices: [{ size: "Custom cake", price: "$40–$55" }],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Customizable"]
      },
      {
        name: "Vanilla Bean Cake",
        portionPrices: [{ size: "Custom cake", price: "$40–$55" }],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Customizable", "Sugar Free Option"]
      },
      {
        name: "Carrot Cake",
        portionPrices: [{ size: "Custom cake", price: "$40–$55" }],
        allergens: ["Gluten", "Eggs", "Dairy", "Tree Nuts (possible)"],
        labels: ["Customizable"]
      },
      {
        name: "Strawberry Cheesecake",
        portionPrices: [{ size: "Cheesecake", price: "$40–$55" }],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Customizable", "Gluten Free Option"]
      },
      {
        name: "Chocolate Cheesecake",
        portionPrices: [{ size: "Cheesecake", price: "$40–$55" }],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Customizable", "Gluten Free Option"]
      },
      {
        name: "Cheesecake (topped with fresh fruit)",
        portionPrices: [{ size: "Cheesecake", price: "$40–$55" }],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Customizable", "Gluten Free Option"]
      }
    ]
  },

  breads: {
    title: "Breads",
    description: "Fresh baked breads — ask about available flavors and custom options.",
    categoryLabels: ["Gluten Free Options (select items)"], // Features available for breads
    goods: [
      // BREADS AVAILABLE - Add or remove items here
      {
        name: "White or Wheat (GF)",
        portionPrices: [{ size: "Loaf", price: "$7–$15" }], // Size options and pricing
        allergens: ["Varies by recipe"], // Allergen warnings
        labels: ["Gluten Free"] // What can be customized
      },
      {
        name: "Chocolate Zucchini / Zucchini",
        portionPrices: [{ size: "Loaf", price: "$7–$15" }],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Customizable"]
      },
      {
        name: "Cranberry Bliss (GF)",
        portionPrices: [{ size: "Loaf", price: "$7–$15" }],
        allergens: ["Varies by recipe"],
        labels: ["Gluten Free"]
      },
      {
        name: "Cinnamon Swirl",
        portionPrices: [{ size: "Loaf", price: "$7–$15" }],
        allergens: ["Gluten", "Eggs", "Dairy (possible)"],
        labels: ["Customizable"]
      },
      {
        name: "Lemon Poppyseed",
        portionPrices: [{ size: "Loaf", price: "$7–$15" }],
        allergens: ["Gluten", "Eggs", "Dairy", "Poppyseed"],
        labels: ["Customizable"]
      },
      {
        name: "Pumpkin",
        portionPrices: [{ size: "Loaf", price: "$7–$15" }],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Customizable"]
      },
      {
        name: "Blueberry (GF)",
        portionPrices: [{ size: "Loaf", price: "$7–$15" }],
        allergens: ["Varies by recipe"],
        labels: ["Gluten Free"]
      },
      {
        name: "Banana",
        portionPrices: [{ size: "Loaf", price: "$7–$15" }],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Customizable", "Sugar Free Option"]
      }
    ]
  },

  specialty: {
    title: "Specialty Treats",
    description: "Seasonal + specialty items. Availability can vary — message me for details!",
    categoryLabels: ["Custom Orders Welcome"], // Features available for specialty
    goods: [
      // SPECIALTY ITEMS - Add or remove items here
      {
        name: "Cinnamon Rolls",
        portionPrices: [
          { size: "Half Dozen", price: "$10" }, // Size options and pricing
          { size: "Full Dozen", price: "$20" }
        ],
        allergens: ["Gluten", "Dairy", "Eggs"], // Allergen warnings
        labels: ["Gluten Free Option"] // What can be customized
      },
      {
        name: "Croissants",
        portionPrices: [
          { size: "Half Dozen", price: "$10" }, // Size options and pricing
          { size: "Full Dozen", price: "$20" }
        ],
        allergens: ["Gluten", "Dairy", "Eggs"], // Allergen warnings
        labels: ["Gluten Free Option"] // What can be customized
      },
      {
        name: "Dinner Rolls",
        portionPrices: [
          { size: "Half Dozen", price: "$10" }, // Size options and pricing
          { size: "Full Dozen", price: "$20" }
        ],
        allergens: ["Gluten", "Dairy", "Eggs"], // Allergen warnings
        labels: ["Gluten Free Option"] // What can be customized
      },
      {
        name: "Oreo Truffles",
        portionPrices: [{ size: "By request", price: "Message for pricing" }],
        allergens: ["Dairy", "Gluten (possible)"],
        labels: ["Customizable"]
      },
      {
        name: "Dipped Pretzels",
        portionPrices: [{ size: "By request", price: "Message for pricing" }],
        allergens: ["Gluten", "Dairy (possible)"],
        labels: ["Customizable"]
      },
      {
        name: "Cake Pops / Cake Popsicles",
        portionPrices: [{ size: "By request", price: "Message for pricing" }],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Customizable"]
      },
      {
        name: "Whoopie Pies",
        portionPrices: [{ size: "By request", price: "$15–$25" }],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Customizable"]
      }
    ]
  },

  cupcakes: {
    title: "Cupcakes",
    description: "Pick your flavors, then choose your order size.",
    categoryLabels: ["Custom Flavors", "Gluten Free Option", "Sugar Free Option"], // Features available
    goods: [
      // CUPCAKE FLAVORS - Add or remove items here
      {
        name: "Chocolate",
        portionPrices: [{ size: "Per Dozen", price: "$10–$20" }], // Size options and pricing
        allergens: ["Gluten", "Eggs", "Dairy"], // Allergen warnings
        labels: ["Customizable"] // What can be customized
      },
      { name: "Peanut Butter", portionPrices: [{ size: "Per Dozen", price: "$10–$20" }], allergens: ["Gluten", "Eggs", "Dairy", "Peanuts"], labels: ["Customizable"] },
      { name: "Churro", portionPrices: [{ size: "Per Dozen", price: "$10–$20" }], allergens: ["Gluten", "Eggs", "Dairy"], labels: ["Customizable"] },
      { name: "Lemon", portionPrices: [{ size: "Per Dozen", price: "$10–$20" }], allergens: ["Gluten", "Eggs", "Dairy"], labels: ["Customizable"] },
      { name: "Strawberry", portionPrices: [{ size: "Per Dozen", price: "$10–$20" }], allergens: ["Gluten", "Eggs", "Dairy"], labels: ["Customizable"] },
      { name: "Cookies n Creme", portionPrices: [{ size: "Per Dozen", price: "$10–$20" }], allergens: ["Gluten", "Eggs", "Dairy"], labels: ["Customizable"] },
      { name: "Funfetti", portionPrices: [{ size: "Per Dozen", price: "$10–$20" }], allergens: ["Gluten", "Eggs", "Dairy"], labels: ["Customizable"] },
      { name: "Red Velvet", portionPrices: [{ size: "Per Dozen", price: "$10–$20" }], allergens: ["Gluten", "Eggs", "Dairy"], labels: ["Customizable"] },
      { name: "Dark Chocolate", portionPrices: [{ size: "Per Dozen", price: "$10–$20" }], allergens: ["Gluten", "Eggs", "Dairy"], labels: ["Customizable"] }
    ]
  },

  cookies: {
    title: "Cookies",
    description: "Choose your cookie type and your order size.",
    categoryLabels: ["All Cookies Gluten Free", "Sugar Free Option (select items)"], // Features available
    goods: [
      // COOKIE FLAVORS - Add or remove items here
      { name: "Sugar", portionPrices: [{ size: "Per Dozen", price: "$10–$25" }], allergens: ["Eggs", "Dairy"], labels: ["Gluten Free"] },
      { name: "Chocolate Chunk", portionPrices: [{ size: "Per Dozen", price: "$10–$25" }], allergens: ["Eggs", "Dairy"], labels: ["Gluten Free"] },
      { name: "Thumbprints", portionPrices: [{ size: "Per Dozen", price: "$10–$25" }], allergens: ["Eggs", "Dairy"], labels: ["Gluten Free"] },
      { name: "Crinkle", portionPrices: [{ size: "Per Dozen", price: "$10–$25" }], allergens: ["Eggs", "Dairy"], labels: ["Gluten Free"] },
      { name: "Pumpkin", portionPrices: [{ size: "Per Dozen", price: "$10–$25" }], allergens: ["Eggs", "Dairy"], labels: ["Gluten Free"] },
      { name: "Oatmeal", portionPrices: [{ size: "Per Dozen", price: "$10–$25" }], allergens: ["Eggs", "Dairy"], labels: ["Gluten Free"] },
      { name: "Seven Layer", portionPrices: [{ size: "Per Dozen", price: "$10–$25" }], allergens: ["Eggs", "Dairy"], labels: ["Gluten Free"] },
      { name: "M&M's", portionPrices: [{ size: "Per Dozen", price: "$10–$25" }], allergens: ["Eggs", "Dairy"], labels: ["Gluten Free"] }
    ]
  }
};



/* ====================================================================
   2. ITEM DETAIL RENDERING — Displays Product Details (item-detail.html)
   ====================================================================
   
   WHAT IT DOES:
   - Reads ?item= query parameter from URL (e.g., ?item=cakes)
   - Looks up category data from the items object above
   - Renders HTML with product info, sizes, prices, allergens
   
   HOW TO USE:
   - User visits: item-detail.html?item=cakes
   - Script pulls "cakes" data from items object
   - Displays formatted product cards with all details
   
   IF IT'S NOT WORKING:
   - Check that ?item=XXXX matches a key in the items object
   - Check browser console (F12) for errors
==================================================================== */

// Get the element where product details will be displayed
const itemDetailEl = document.getElementById("itemDetail");

if (itemDetailEl) {
  // Extract the item category from URL (e.g., ?item=cakes)
  const params = new URLSearchParams(window.location.search);
  const itemKey = params.get("item");

  // HELPER FUNCTION: Escape HTML to prevent security issues
  const escapeHtml = (str) =>
    String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  // HELPER FUNCTION: Create colored badge chips for allergens/labels
  const renderChips = (arr, chipClass) => {
    if (!arr || !arr.length) return "<p class='muted'>None</p>";
    return `<div class="chip-row">${arr
      .map((x) => `<span class="chip ${chipClass}">${escapeHtml(x)}</span>`)
      .join("")}</div>`;
  };

  // HELPER FUNCTION: Create price table from size/price pairs
  const renderPriceTable = (portionPrices) => {
    if (!portionPrices || !portionPrices.length) return "<p class='muted'>Message for pricing</p>";
    return `
      <table class="price-table">
        <thead><tr><th>Portion size</th><th>Price</th></tr></thead>
        <tbody>
          ${portionPrices
            .map(
              (p) => `<tr><td>${escapeHtml(p.size)}</td><td>${escapeHtml(p.price)}</td></tr>`
            )
            .join("")}
        </tbody>
      </table>
    `;
  };

  // Check if the requested category exists in the items object
  if (itemKey && items[itemKey]) {
    const cat = items[itemKey]; // Get category data (cakes, breads, etc)

    // Build and display the HTML for this category
    itemDetailEl.innerHTML = `
      <section class="detail-header">
        <h2>${escapeHtml(cat.title)}</h2>
        <p>${escapeHtml(cat.description)}</p>

        <h4>Category Labels</h4>
        ${renderChips(cat.categoryLabels, "label")}
      </section>

      <section class="goods-section">
        <h3>Options</h3>
        <div class="goods-grid">
          ${cat.goods
            .map(
              (g) => `
              <article class="good-card">
                <div class="good-top">
                  <h4>${escapeHtml(g.name)}</h4>
                </div>

                <div class="good-block">
                  <h5>Portion Sizes & Prices</h5>
                  ${renderPriceTable(g.portionPrices)}
                </div>

                <div class="good-block">
                  <h5>Allergens</h5>
                  ${renderChips(g.allergens, "allergen")}
                </div>

                <div class="good-block">
                  <h5>Customization Labels</h5>
                  ${renderChips(g.labels, "label")}
                </div>

                <div class="good-actions">
                  <a class="btn" href="contact.html">Request This</a>
                  <a class="btn secondary" href="items.html">← Back to Menu</a>
                </div>
              </article>
            `
            )
            .join("")}
        </div>
      </section>
    `;
  } else {
    // If the item category doesn't exist, show error message
    itemDetailEl.innerHTML = `<h2>Item not found</h2><p>Please go back to the menu.</p>`;
  }
}




/* ====================================================================
   3. CONTACT FORM — Email Integration with EmailJS Service
   ====================================================================
   
   WHAT IT DOES:
   - Handles contact form submission on contact.html
   - Sends emails using the EmailJS service
   - Shows user feedback (success/error messages)
   
   HOW TO SETUP:
   1. Sign up at https://www.emailjs.com/
   2. Create a new service and template
   3. Replace these values with YOUR credentials:
      - emailjs.init("YOUR_PUBLIC_KEY") - Your EmailJS public key
      - emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
   
   WHERE TO FIND CREDENTIALS:
   - Public Key: Dashboard > Account > Public Key
   - Service ID: Services section
   - Template ID: Email Templates section
   
   HOW TO TEST:
   - Fill out the contact form and submit
   - Check your email inbox to confirm messages arrive
==================================================================== */

(function () {
  // Initialize EmailJS with your public key
  // TODO: Replace with your actual EmailJS public key
  emailjs.init("ghlIhVPe555cmjCSd");
})();

// Get form element and status message display element
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

// Handle form submission
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Show "Sending..." message to user
    if (formStatus) {
      formStatus.textContent = "Sending...";
    }

    // Send email using EmailJS
    // TODO: Replace 'service_uz73kd3' with YOUR_SERVICE_ID
    // TODO: Replace 'template_li1j57b' with YOUR_TEMPLATE_ID
    emailjs
      .sendForm('service_uz73kd3', 'template_li1j57b', this)
      .then(() => {
        // Email sent successfully
        if (formStatus) {
          formStatus.textContent = "Message sent! I'll get back to you soon.";
        }
        contactForm.reset(); // Clear the form fields
      })
      .catch((error) => {
        // Email failed to send
        console.error("EmailJS Error:", error);
        if (formStatus) {
          formStatus.textContent = "Something went wrong. Please try again or message me on instagram.";
        }
      });
  });
}


/* ====================================================================
   4. FEATURED PHOTOS — Static Featured Images (Home Page)
   ====================================================================
   
   WHAT IT DOES:
   - Displays 3-4 featured photos in a responsive grid
   - Adds hover effects for interactivity
   - No auto-scrolling - static display
   
   WHERE IT'S USED:
   - index.html - Featured Bakes section grid
==================================================================== */
/* No JavaScript needed - featured images are static grid */


/* ====================================================================
   5. GALLERY LIGHTBOX — Image Preview Modal (Gallery Page)
   ====================================================================
   
   WHAT IT DOES:
   - Displays large image preview when user clicks gallery thumbnail
   - Shows image caption
   - Closes when user clicks close button, clicks outside image, or presses ESC
   
   WHERE IT'S USED:
   - gallery.html - Gallery grid
   
   HOW TO USE:
   - User clicks any gallery image
   - Large version opens in modal overlay
   - User can close by: clicking X button, clicking dark area, or pressing ESC
==================================================================== */
(function setupGalleryLightbox() {
  // Get lightbox elements from the HTML
  const grid = document.getElementById("galleryGrid");
  const lightbox = document.getElementById("lightbox");
  const imgEl = document.getElementById("lightboxImg");
  const capEl = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");

  // Exit if any required element is missing
  if (!grid || !lightbox || !imgEl || !capEl || !closeBtn) return;

  // Function to open the lightbox with an image
  const open = (src, alt, caption) => {
    imgEl.src = src; // Set the image source
    imgEl.alt = alt || ""; // Set image alt text
    capEl.textContent = caption || ""; // Set caption text
    lightbox.classList.add("is-open"); // Show lightbox (CSS does the display)
    lightbox.setAttribute("aria-hidden", "false"); // Announce to screen readers
  };

  // Function to close the lightbox
  const close = () => {
    lightbox.classList.remove("is-open"); // Hide lightbox
    lightbox.setAttribute("aria-hidden", "true"); // Announce to screen readers
    imgEl.src = ""; // Clear image
    capEl.textContent = ""; // Clear caption
  };

  // Click on gallery image to open lightbox
  grid.addEventListener("click", (e) => {
    const figure = e.target.closest(".gallery-item"); // Find clicked gallery item
    if (!figure) return;

    const img = figure.querySelector("img");
    const cap = figure.querySelector("figcaption");
    if (!img) return;

    open(img.src, img.alt, cap ? cap.textContent : "");
  });

  // Close button - close when X is clicked
  closeBtn.addEventListener("click", close);

  // Click outside image - close when clicking dark background
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close(); // Only close if clicking the background, not the image
  });

  // ESC key - close when user presses ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("is-open")) close();
  });
})();
