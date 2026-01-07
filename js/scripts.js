// Item detail data (easy to expand later)
const items = {
bread: {
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
}
};


// Load item detail page
const params = new URLSearchParams(window.location.search);
const itemKey = params.get('item');


if (itemKey && items[itemKey]) {
const item = items[itemKey];
document.getElementById('itemDetail').innerHTML = `
<h2>${item.title}</h2>
<p>${item.description}</p>
<h4>Serving Sizes</h4>
<ul>${item.servings.map(s => `<li>${s}</li>`).join('')}</ul>
<h4>Allergens</h4>
<ul>${item.allergens.map(a => `<li>${a}</li>`).join('')}</ul>
<h4>Available Labels</h4>
<ul>${item.labels.map(l => `<li>${l}</li>`).join('')}</ul>
`;
}


// EmailJS contact form setup (requires free EmailJS account)
if (document.getElementById('contactForm')) {
emailjs.init('YOUR_PUBLIC_KEY');


document.getElementById('contactForm').addEventListener('submit', function(e) {
e.preventDefault();


emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
.then(() => alert('Message sent successfully!'))
.catch(() => alert('Error sending message.'));
});
}