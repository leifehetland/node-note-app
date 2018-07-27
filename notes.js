console.log('Starting notes.js.');

const fs = require('fs');

let fetchNotes = () => {
	try {
		let notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (error) {
		return [];
	}
};

let saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
	// console.log("Adding note: ", title, body);
	let notes = fetchNotes();
	let note = {
		title: title,
		body: body
	};	
	let duplicateNotes = notes.filter((note) => {
		return note.title === title;
	});

	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

let getAll = () => {
	// console.log("Retrieving All Notes: ");
	return fetchNotes();
};

let getNote = (title) => {
	// console.log("Retrieving Note: ", title);
	let notes = fetchNotes();

	let filterNotes = notes.filter((note) => {
		return note.title === title;
	});

	return filterNotes[0];
};

let removeNote = (title) => {
	// console.log("Removed Note: ", title);

	// fetch notes
	let notes = fetchNotes();

	// Filter notes
	let filterNotes = notes.filter((note) => {
		return note.title !== title;
	});

	// save notes
	saveNotes(filterNotes);

	return notes.length !== filterNotes.length;
};

let logNote = (note) => {
	// debugger;
	console.log('------------');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
}

// ES6 if value is identical you only have to place it once ex. addNote,
module.exports = {
	addNote: addNote,
	getAll: getAll,
	getNote: getNote,
	removeNote: removeNote,
	logNote: logNote
}