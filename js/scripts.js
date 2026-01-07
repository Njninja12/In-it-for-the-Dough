// Item detail data (easy to expand later)
const items = {
  breads: {
    title: "Breads",
    description: "Sourdough, sandwich bread, banana bread, croissants, rolls, and more.",
    servings: ["Loaf", "2 Loaves", "Party Size"],
    allergens: ["Gluten", "Dairy", "Eggs"],
    labels: ["Dairy Free Options", "Gluten Free Options"]
  },
  cakes: {
    title: "Cakes",
    description: "Custom cakes for birthdays, events, and celebrations.",
    servings: ["6", "12", "24"],
    allergens: ["Eggs", "Dairy", "Gluten"],
    labels: []
  },
  cookies: {
    title: "Cookies",
    description: "Classic cookies and custom flavors.",
    servings: ["6", "12", "24"],
    allergens: ["Peanuts", "Gluten", "Eggs"],
    labels: ["Sugar Free Options"]
  },
  specialty: {
    title: "Specialty Treats",
    description: "Seasonal and specialty items made to order.",
    servings: ["Single", "Half Dozen", "Dozen"],
    allergens: ["Varies"],
    labels: []
  },
  cupcakes: {
    title: "Cupcakes",
    description: "Small celebration cupcakes — custom flavors and decorations.",
    servings: ["1", "6", "12"],
    allergens: ["Eggs", "Dairy", "Gluten"],
    labels: []
  }
};


// Load item detail page
const params = new URLSearchParams(window.location.search);
const itemKey = params.get('item');

if (itemKey && items[itemKey]) {
  const item = items[itemKey];
  const renderList = (arr) => (arr && arr.length ? `<ul>${arr.map(x => `<li>${x}</li>`).join('')}</ul>` : '<p>None</p>');
  document.getElementById('itemDetail').innerHTML = `
    <h2>${item.title}</h2>
    <p>${item.description}</p>
    <h4>Serving Sizes</h4>
    ${renderList(item.servings)}
    <h4>Allergens</h4>
    ${renderList(item.allergens)}
    <h4>Available Labels</h4>
    ${renderList(item.labels)}
  `;
} else if (document.getElementById('itemDetail')) {
  document.getElementById('itemDetail').innerHTML = `<h2>Item not found</h2><p>Please go back to the menu.</p>`;
}


// EmailJS contact form setup (requires free EmailJS account)
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