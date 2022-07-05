const imgs = document.querySelectorAll('.img')

imgs.forEach(img => {
	img.addEventListener('click', () => {
		img.classList.toggle('active')
	})
})

imgs.forEach(img => {
	img.addEventListener('transitionend', (e) => {
		if(e.propertyName.includes('flex')) {
			img.classList.toggle('active-tran')
		}
	})
})