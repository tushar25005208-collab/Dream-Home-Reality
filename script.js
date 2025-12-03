const properties = [
  { name: "Luxury Apartment", location: "Delhi", type: "Apartment", price: 5500000, img: "ap1.jpg" },
  { name: "Luxury Apartment", location: "Ghaziabad", type: "Apartment", price: 5000000, img: "ap2.jpg" },
  { name: "Beachside Villa", location: "Goa", type: "Villa", price: 12000000, img: "v1.webp" },
  { name: "Beachside Villa", location: "Mumbai", type: "Villa", price: 22000000, img: "v2.jpg" },
  { name: "Cozy Cottage", location: "Manali", type: "Cottage", price: 4000000, img: "c1.jpg" },
  { name: "Cozy Cottage", location: "Manali", type: "Cottage", price: 4000000, img: "c2.jpg" },
  { name: "Residential Plot", location: "Jaipur", type: "Plot", price: 3000000, img: "plot.jpg" }
];

const propertyList = document.getElementById("propertyList");
const filterForm = document.getElementById("filterForm");
const enquiryForm = document.getElementById("enquiryForm");

function displayProperties(list) {
  propertyList.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("property");
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Location: ${p.location}</p>
      <p>Type: ${p.type}</p>
      <p>Price: ₹${p.price.toLocaleString()}</p>
    `;
    propertyList.appendChild(div);
  });
}

filterForm.addEventListener("submit", e => {
  e.preventDefault();
  const location = document.getElementById("locationFilter").value.toLowerCase();
  const type = document.getElementById("typeFilter").value;
  const minPrice = document.getElementById("minPrice").value;
  const maxPrice = document.getElementById("maxPrice").value;

  const filtered = properties.filter(p => {
    return (!location || p.location.toLowerCase().includes(location)) &&
           (!type || p.type === type) &&
           (!minPrice || p.price >= minPrice) &&
           (!maxPrice || p.price <= maxPrice);
  });

  displayProperties(filtered);
});

enquiryForm.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for your enquiry! We will contact you soon.");
  enquiryForm.reset();
});

// Initial load
displayProperties(properties);