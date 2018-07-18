console.log('Starting notes.js.');

let addNote = (title, body) => {
	console.log("Adding note: ", title, body);
};

let getAll = () => {
	console.log("Retrieving All Notes: ");
};

let getNote = (title) => {
	console.log("Retrieving Note: ", title);
};

let removeNote = (title) => {
	console.log("Removed Note: ", title);
};

// ES6 if value is identical you only have to place it once ex. addNote,
module.exports = {
	addNote: addNote,
	getAll: getAll,
	getNote: getNote,
	removeNote: removeNote
}