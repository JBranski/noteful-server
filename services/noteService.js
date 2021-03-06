const noteService = {
	createNote ( db, newNote ){
		return db
			.insert( newNote )
			.into( 'notes' )
			.returning( '*' )
			.then( result => {
				return result[0]
			});
	},
	getNotes( db ) {
		return db
			.select( '*' )
			.from( 'notes' )
			.then( result => {
				console.log(result);
				return result;
			})
	},
	deleteNote( db, id ) {
		return db
			.from( 'notes' )
			.where( {id} )
			.delete()
			.then( result => {
				return result;
			})
	}
};

module.exports = noteService;