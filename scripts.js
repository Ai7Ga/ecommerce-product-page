let add_to_cart_number = 0

document.querySelectorAll('.lightbox__container-thumbnails-thumbnail').forEach(item => {
	item.addEventListener('click', event => {
		document.querySelector('.lightbox__container-large-image').src = item.src.replace('-thumbnail','')
	})
})

document.querySelector('#counter-up').addEventListener('click',() => {
	++add_to_cart_number
	document.querySelector('#description__counter-number').value = add_to_cart_number
})

document.querySelector('#counter-down').addEventListener('click',() => {
	--add_to_cart_number
	document.querySelector('#description__counter-number').value = add_to_cart_number
})

document.querySelector('#description__counter-number').addEventListener('change',() => {
	add_to_cart_number = document.querySelector('#description__counter-number').value
})