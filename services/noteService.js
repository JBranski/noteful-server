const noteService = {
	createNote ( db, newNote ){
		return db
			.insert( newNote )
			.into( 'notes' )
			.returning( '*' )
			.then( result => {
				return result[0]
			});
	}
};

module.exports = noteService;