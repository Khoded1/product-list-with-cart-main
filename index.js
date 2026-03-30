const button = document.querySelectorAll('.addToCartBtn');
const increaseItmeBtn = document.querySelectorAll(
	'.quantity-controls button:first-child',
);
const decreaseItemBtn = document.querySelectorAll(
	'.quantity-controls button:last-child',
);
const quantityControl = document.querySelectorAll('.quantity-controls');
const confirmCartBtn = document.querySelector('.confirm_cart_btn');
const removeItemBtn = document.querySelectorAll('.remove_item_btn');
const cartItemCount = document.getElementById('itemCount');
const itemtotalPrice = document.querySelector('.item_total_price');

// const output = document.getElementById('output');

let cart = [];

button.forEach(btn => {
	btn.addEventListener('click', () => {
		console.log('done');
		btn.classList.add('active');
		quantityControl.classList.remove('active');
	});
});

// button.forEach(btn => {
// 	btn.addEventListener('click', () => {
// 		fetch('data.json')
// 			.then(res => res.json())
// 			.then(data => {
// 				output.innerHTML = '';

// 				data.forEach(product => {
// 					output.innerHTML += `
// 						<div class="product">
// 							<h3>${product.name}</h3>
// 							<p>Price: $${product.price}</p>
// 							<button class="addToCartBtn" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
// 						</div>
// 					`;
// 				});
// 				const buttons = document.querySelectorAll('.addToCartBtn');
// 				buttons.forEach(btn => {
// 					btn.addEventListener('click', () => {
// 						console.log('DONE');
// 						const product = {
// 							id: btn.dataset.id,
// 							name: btn.dataset.name,
// 							price: btn.dataset.price,
// 						};
// 						cart.push(product);
// 						console.log(cart);
// 					});
// 				});
// 			});
// 	});
// });
