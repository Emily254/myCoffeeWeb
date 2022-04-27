let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () =>{
	searchForm.classList.toggle('active');
	cartItems.classList.remove('active');
	navbar.classList.remove('active');
}
let cartItems = document.querySelector(".cart-item-container");

document.querySelector("#cart-btn").onclick =()=>{
	cartItems.classList.toggle('active');
	searchForm.classList.remove('active');
	navbar.classList.remove('active');
}
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick=()=>{
	navbar.classList.toggle('active');
	searchForm.classList.remove('active');
	cartItems.classList.remove('active');
}

window.onscroll =() =>{
	navbar.classList.remove('active');
	searchForm.classList.remove('active');
	cartItems.classList.remove('active');
}