
const products = [
    { name: 'Café Americano'},
    { name: 'Café con Leche'},
    { name: 'Café Espresso'},
    { name: 'Café Mocha'},
    { name: 'Café Latte'},
];
const productsList = document.getElementById('products-list');
products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name}`;
    productsList.appendChild(li);
});

const productstea = [
    { name: 'Té de Café'},
    { name: 'Té de Chá'},
    { name: 'Té de Camomila'},
    { name: 'Té de Ginebra'},
    { name: 'Té de Jengibre'},
  ];
  const productsListtea = document.getElementById('products-list-tea');
  productstea.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name}`;
    productsListtea.appendChild(li);
  });

  const frappe = [
    { name: 'Frappe de Café'},
    { name: 'Frappe de Vainilla'},
    { name: 'Frappe de Caramelo'},
    { name: 'Frappe de Moka'},
    { name: 'Frappe Capuchino'},
  ];
  const productsListfrappe = document.getElementById('products-list-frappe');
  frappe.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name}`;
    productsListfrappe.appendChild(li);
  }
  );

  const frappesincafe = [
    { name: 'Frappe de Vainilla'},
    { name: 'Frappe de Caramelo'},
    { name: 'Frappe de Moka'},
    { name: 'Frappe Capuchino'},
  ];
  const productsListfrappesincafe = document.getElementById('products-list-frappe-sc');
  frappesincafe.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name}`;
    productsListfrappesincafe.appendChild(li);
  }
  );

  const productslistcookies = [
    { name: 'Galletas de Chocolate'},
    { name: 'Galletas de Vainilla'},
    { name: 'Galletas Con Chips de Chocolate'},
    { name: 'Galletas de Limón'},
    { name: 'Galletas de Coco'},
  ];
  const productsListcookies = document.getElementById('products-list-cookies');
  productslistcookies.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name}`;
    productsListcookies.appendChild(li);
  });

const productsListcookiesdulces = [
    { name: 'Galletas de Fresa'},
    { name: 'Galletas de Miel'},
    { name: 'Galletas de Canela'},
    { name: 'Galletas de Nuez'},
    { name: 'Galletas de Caramelo'} 
    ];
  const productsListdulces = document.getElementById('products-list-cookies-dulces');
    productsListcookiesdulces.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name}`;
        productsListdulces.appendChild(li);
    });

    const productspasteles = [
    { name: 'Pastel de Chocolate'},
    { name: 'Pastel de Vainilla'},
    { name: 'Pastel de Fresa'},
    { name: 'Pastel de Limón'},
    { name: 'Pastel de Zanahoria'}
    ];
    const productsListpasteles = document.getElementById('products-list-pasteles');
    productspasteles.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name}`;
        productsListpasteles.appendChild(li);
    });

    const productscupcakes = [
    { name: 'Cupcake de Chocolate'},
    { name: 'Cupcake de Vainilla'},
    { name: 'Cupcake de Fresa'},
    { name: 'Cupcake de Limón'},
    { name: 'Cupcake de Zanahoria'}
    ];
    const productsListcupcakes = document.getElementById('products-list-cupcakes');
    productscupcakes.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name}`;
        productsListcupcakes.appendChild(li);
    });

  const sanwiches = [
    { name: 'Sándwich de Pollo'},
    { name: 'Sándwich de Atún'},
    { name: 'Sándwich de Jamón'},
    { name: 'Sándwich de Vegetales'},
    { name: 'Sándwich de Pavo'}
    ];
  const productsListsandwiches = document.getElementById('products-list-sandwiches');
  sanwiches.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name}`;
    productsListsandwiches.appendChild(li);
  });

