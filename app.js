let body = document.querySelector('body')

//for (начало = 0; 5 раз; счетчик = 5 )
for (let i = 6; i <= 10; i++) {
	let header = document.createElement('h1')
	header.innerText = `${i} человек`
	body.appendChild(header)
}

