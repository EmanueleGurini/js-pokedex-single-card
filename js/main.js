import { q, getId, GET } from './utils.js'

const pokemonName = q(".pkm-name")
const pokemonId = q(".pkm-id")
const pokemonType = q(".pkm-type")
const pokemonAvatar = q(".pkm-avatar")
const btnPrev = q(".btn-prev")
const btnNext = q(".btn-next")

// GLOBAL VARIABLES
const url = "https://pokeapi.co/api/v2/pokemon"
let index = 1;

// BTN EVENT LISTENERS
btnPrev.addEventListener('click', (e) => {
	let instruction = e.target.textContent;
	getPokemon(instruction)
})

btnNext.addEventListener('click', (e) => {
	let instruction = e.target.textContent;
	getPokemon(instruction)
})


const getPokemon = (instruction) => {

	if (!instruction) {
		instruction = 1;
	} else {
		instruction = instruction.toLowerCase();
	};

	switch (instruction) {
		case 'prev':
			index = index - 1;
			break;
		case 'next':
			index = index + 1;
			break;
		default:
			index = instruction;
	}

	GET(`${url}/${index}`)
		.then(res => {
			pokemonName.textContent = res?.name;
			pokemonId.textContent = `# ${getId(res?.id)}`;
			pokemonType.textContent = `Type: ${res?.types[0]?.type?.name}`;
			pokemonAvatar.setAttribute("src", res?.sprites?.other["official-artwork"]?.front_default);
			pokemonAvatar.setAttribute("alt", res?.name);

			if (index <= 1) {
				btnPrev.disabled = true;
				btnPrev.classList.add("disabled")
			} else {
				btnPrev.disabled = false;
				btnPrev.classList.remove("disabled")
			}

			if (index >= 5) {
				btnNext.disabled = true;
				btnNext.classList.add("disabled")
			} else {
				btnNext.disabled = false;
				btnNext.classList.remove("disabled")
			}
		})
}

window.onload = getPokemon();