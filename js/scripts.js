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

const items = {
  breads: {
    title: "Breads",
    description: "Sourdough, sandwich bread, banana bread, rolls, and more.",
    categoryLabels: ["Gluten Free Options", "Dairy Free Options", "Sugar Free Options"],
    goods: [
      {
        name: "Sourdough Loaf",
        description: "Classic fermented sourdough with a crisp crust and soft center.",
        portionSizes: ["Loaf", "2 Loaves", "Party Size"],
        allergens: ["Gluten"],
        labels: ["Dairy Free Option"]
      },
      {
        name: "Sandwich Bread",
        description: "Soft, sliceable loaf for everyday sandwiches.",
        portionSizes: ["Loaf", "2 Loaves", "Family Pack (3 loaves)"],
        allergens: ["Gluten", "Dairy (optional)"],
        labels: ["Dairy Free Option", "Sugar Free Option"]
      },
      {
        name: "Banana Bread",
        description: "Moist banana bread with optional add-ins.",
        portionSizes: ["Loaf", "2 Loaves"],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Sugar Free Option"]
      },
      {
        name: "Dinner Rolls",
        description: "Soft rolls for gatherings and holidays.",
        portionSizes: ["Half Dozen", "Dozen", "Party Pack (24)"],
        allergens: ["Gluten", "Dairy", "Eggs"],
        labels: ["Dairy Free Option"]
      }
    ]
  },

  cakes: {
    title: "Classic Cakes & Cheesecakes",
    description: "Custom cakes for birthdays, events, and celebrations.",
    categoryLabels: ["Gluten Free Options", "Sugar Free Options"],
    goods: [
      {
        name: "Birthday Cake",
        description: "Custom flavor + custom design.",
        portionSizes: ['6" (serves ~8-10)', '8" (serves ~12-16)', '9" (serves ~18-24)', "Sheet Cake"],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Gluten Free Option", "Sugar Free Option"]
      },
      {
        name: "Cheesecake",
        description: "Classic cheesecake with optional toppings.",
        portionSizes: ['6"', '8"', '9"'],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Gluten Free Option"]
      },
      {
        name: "Cupcake Cake (pull-apart)",
        description: "A fun party option that serves like cupcakes but looks like a cake.",
        portionSizes: ["12 Cupcakes", "24 Cupcakes", "Party Size (36+)"],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Sugar Free Option"]
      }
    ]
  },

  cookies: {
    title: "Cookies",
    description: "Classic cookies and custom flavors — baked fresh to order.",
    categoryLabels: ["Sugar Free Options", "Gluten Free Options", "Nut Free Options"],
    goods: [
      {
        name: "Chocolate Chip Cookies",
        description: "Soft and chewy classic.",
        portionSizes: ["Half Dozen", "Dozen", "Party Pack (24)"],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Sugar Free Option", "Gluten Free Option"]
      },
      {
        name: "Sugar Cookies (decorated)",
        description: "Custom shapes + custom frosting designs.",
        portionSizes: ["Half Dozen", "Dozen", "Party Pack (24)"],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Gluten Free Option"]
      },
      {
        name: "Brownies / Bars",
        description: "Brownies, blondies, lemon bars, and more.",
        portionSizes: ["8x8 Pan", "9x13 Pan", "Party Tray"],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Sugar Free Option"]
      }
    ]
  },

  cupcakes: {
    title: "Cupcakes",
    description: "Small celebration cupcakes — custom flavors and decorations.",
    categoryLabels: ["Gluten Free Options", "Sugar Free Options"],
    goods: [
      {
        name: "Classic Cupcakes",
        description: "Vanilla, chocolate, red velvet, and more.",
        portionSizes: ["Half Dozen", "Dozen", "Party Pack (24)"],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Gluten Free Option", "Sugar Free Option"]
      },
      {
        name: "Filled Cupcakes",
        description: "Filled with custard, fruit, or ganache (varies).",
        portionSizes: ["Half Dozen", "Dozen"],
        allergens: ["Gluten", "Eggs", "Dairy"],
        labels: ["Gluten Free Option"]
      }
    ]
  },

  specialty: {
    title: "Specialty Treats",
    description: "Seasonal and specialty items made to order.",
    categoryLabels: ["Varies by item"],
    goods: [
      {
        name: "Seasonal Treat Box",
        description: "Assorted seasonal goodies (ask what's available).",
        portionSizes: ["Single", "Half Dozen", "Dozen"],
        allergens: ["Varies"],
        labels: ["Customizable"]
      }
    ]
  }
};


/* --------------------------
   Item detail rendering (only runs on item-detail.html)
-------------------------- */

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
    if (!arr || !arr.length) return "";
    return `<div class="chip-row">${arr
      .map((x) => `<span class="chip ${chipClass}">${escapeHtml(x)}</span>`)
      .join("")}</div>`;
  };

  const renderList = (arr) => {
    if (!arr || !arr.length) return "<p class='muted'>None</p>";
    return `<ul>${arr.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>`;
  };

  if (itemKey && items[itemKey]) {
    const cat = items[itemKey];

    itemDetailEl.innerHTML = `
      <section class="detail-header">
        <h2>${escapeHtml(cat.title)}</h2>
        <p>${escapeHtml(cat.description)}</p>

        <h4>Customization Options</h4>
        ${renderChips(cat.categoryLabels, "label")}
      </section>

      <section class="goods-section">
        <h3>Available Baked Goods</h3>

        <div class="goods-grid">
          ${cat.goods
            .map(
              (g) => `
            <article class="good-card">
              <div class="good-top">
                <h4>${escapeHtml(g.name)}</h4>
                <p class="muted">${escapeHtml(g.description || "")}</p>
              </div>

              <div class="good-block">
                <h5>Portion Sizes</h5>
                ${renderList(g.portionSizes)}
              </div>

              <div class="good-block">
                <h5>Allergens</h5>
                ${renderChips(g.allergens, "allergen")}
              </div>

              <div class="good-block">
                <h5>Custom Labels</h5>
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