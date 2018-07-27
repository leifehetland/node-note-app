console.log('Starting app.js.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
};

const bodyOptions = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
};

const argv = yargs
	.command('add', 'Add a new note.', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list', 'List all notes.')
	.command('read', 'Read a note.', {
		title: titleOptions
	})
	.command('remove', 'Removes a note.', {
		title: titleOptions
	})
	.help()
	.argv;
let command = argv._[0];

console.log('Command', command);
console.log('Yargs', argv);

if (command === 'add') {
	// console.log('Adding new note.');
	let note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note created.');
		notes.logNote(note);
	} else {
		console.log('Note title already in use.');
	}

} else if (command === 'list') {
	// console.log('Listing all notes.');
	let allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	// For each, expression syntax
	allNotes.forEach((note) => notes.logNote(note));
	
} else if (command === 'read') {
	// console.log('Reading note.');
	let note = notes.getNote(argv.title);
	
	if (note) {
		console.log('Note read.');
		notes.logNote(note);
	} else {
		console.log('Note not found');
	}
} else if (command === 'remove') {
	// console.log('Removing note.');
	let noteRemoved = notes.removeNote(argv.title);
	// Ternary Operator
	let message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);
} else {
	console.log('Command not recognized.');	
}
