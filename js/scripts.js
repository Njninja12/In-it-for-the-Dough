/* scripts.js — site JavaScript
   - `items` contains menu categories used by item-detail.html
   - Item detail page reads ?item= and renders content into #itemDetail
   - Contact form integration (EmailJS) is configured below; replace placeholders with your keys
*/
// Item detail data (easy to expand later)
/* --------------------------
   Item detail data (categories + baked goods)
   - item-detail.html uses ?item=breads (etc)
   - each category has an array of baked goods with sizes + allergens + labels
-------------------------- */

// Item detail data (categories -> list of items with sizes + prices + tags)
const items = {
  cakes: {
    title: "Classic Cakes & Cheesecakes",
    description: "Choose a cake/cheesecake flavor, then pick your size. Customization available.",
    categoryLabels: ["Custom Decorations", "Gluten Free Option", "Sugar Free Option"],
    goods: [
      {
        name: "Chocolate Fudge Cake",
        portionPrices: [{ size: "Custom cake", price: "$40–$55" }],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Customizable"]
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
    categoryLabels: ["Gluten Free Options (select items)"],
    goods: [
      {
        name: "White or Wheat (GF)",
        portionPrices: [{ size: "Loaf", price: "$7–$15" }],
        allergens: ["Varies by recipe"],
        labels: ["Gluten Free"]
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
    categoryLabels: ["Custom Orders Welcome"],
    goods: [
      {
        name: "Cinnamon Rolls",
        portionPrices: [
          { size: "Half Dozen", price: "$10" },
          { size: "Full Dozen", price: "$20" }
        ],
        allergens: ["Gluten", "Dairy", "Eggs"],
        labels: ["Gluten Free Option"] // menu note: rolls are gluten free
      },
      {
        name: "Croissants",
        portionPrices: [
          { size: "Half Dozen", price: "$10" },
          { size: "Full Dozen", price: "$20" }
        ],
        allergens: ["Gluten", "Dairy", "Eggs"],
        labels: ["Gluten Free Option"] // menu note: rolls are gluten free
      },
      {
        name: "Dinner Rolls",
        portionPrices: [
          { size: "Half Dozen", price: "$10" },
          { size: "Full Dozen", price: "$20" }
        ],
        allergens: ["Gluten", "Dairy", "Eggs"],
        labels: ["Gluten Free Option"] // menu note: rolls are gluten free
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
    categoryLabels: ["Custom Flavors", "Gluten Free Option", "Sugar Free Option"],
    goods: [
      {
        name: "Chocolate",
        portionPrices: [{ size: "Per Dozen", price: "$10–$20" }],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Customizable"]
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
    categoryLabels: ["All Cookies Gluten Free", "Sugar Free Option (select items)"],
    goods: [
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



/* --------------------------
   Item detail rendering (only runs on item-detail.html)
-------------------------- */

// --------------------------
// Item detail rendering
// --------------------------
const itemDetailEl = document.getElementById("itemDetail");

if (itemDetailEl) {
  const params = new URLSearchParams(window.location.search);
  const itemKey = params.get("item");

  const escapeHtml = (str) =>
    String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const renderChips = (arr, chipClass) => {
    if (!arr || !arr.length) return "<p class='muted'>None</p>";
    return `<div class="chip-row">${arr
      .map((x) => `<span class="chip ${chipClass}">${escapeHtml(x)}</span>`)
      .join("")}</div>`;
  };

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

  if (itemKey && items[itemKey]) {
    const cat = items[itemKey];

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
    itemDetailEl.innerHTML = `<h2>Item not found</h2><p>Please go back to the menu.</p>`;
  }
}




// --------------------------
// Contact form (EmailJS)
// Configure your EmailJS public key, service ID and template ID below:
// - Replace 'YOUR_PUBLIC_KEY' with your EmailJS public key
// - Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' where they are used in sendForm
// --------------------------
if (document.getElementById('contactForm')) {
  if (window.emailjs && typeof emailjs.init === 'function') {
    emailjs.init('YOUR_PUBLIC_KEY');
  }
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (!window.emailjs || typeof emailjs.sendForm !== 'function') {
      alert('Email service is not available right now.');
      return;
    }
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(() => alert('Message sent successfully!'))
      .catch(() => alert('Error sending message.'));
  });
}