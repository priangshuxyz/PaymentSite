const packages = [
    { diamonds: 5, price: 15, top: '300px', left: '12rem' },
    { diamonds: 14, price: 30, top: '300px', left: '31rem' },
    { diamonds: 22, price: 40, top: '300px', left: '50rem' },
    { diamonds: 42, price: 75, top: '500px', left: '12rem' },
    { diamonds: "WEEKLY PASS", price: 145, top: '500px', left: '31rem' },
    { diamonds: "STARLIGHT (7 DAYS)", price: 230, top: '500px', left: '50rem' }
];

const packageItemsContainer = document.querySelector('.packageItems');

packages.forEach(pkg => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('pItem');
    itemDiv.style.top = pkg.top;
    itemDiv.style.left = pkg.left;

    itemDiv.style.backgroundImage = "url('black.jpg')";

    itemDiv.innerHTML = `    
    <p>${pkg.diamonds} DIAMONDS</p>
        <p>RS ${pkg.price}</p>
    `;
    packageItemsContainer.appendChild(itemDiv);
});
