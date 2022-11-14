/**
 * Select an element that match with the class name passed as argument
 * 	 
 * @param {string} el - specific class name 
 * @returns HTMLElement 
 */
const q = (el) => document.querySelector(el);


/**
 * Create an HTML Element
 * 	 
 * @param {string} el - html element
 * @returns HTMLElement 
 */
const c = (el) => document.createElement(el);


/**
 * Send a GET request to a specific end-point 
 * 
 * @param {string} URL 
 * @returns data 
 */
const GET = async URL => {
	const response = await fetch(URL);
	const data = await response.json();
	return await data;
}


/**
 * Return the id formatted as following # 000 
 * @param {number} n
 * @returns id
 */
const getId = (n) => {
	if (!n) return "000";

	let id = n;
	if (id < 10) {
		id = '00' + id
	} else if (id < 100) {
		id = '0' + id
	}
	return id;
}


export { q, c, getId, GET }; 