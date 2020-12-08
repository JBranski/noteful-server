const folderService = {
	createFolder( db, newFolder ) {
		return db
			.insert( newFolder )
			.into( 'folders' )
			.returning( '*' )
			.then( result => {
				return result[0]
			});
	},
	getFolderById( db, id ) {
		return db
			.select( '*' )
			.from( 'folders' )
			.where( {id} )
			.then( result => {
				return result;
			})
	}
}

module.exports = folderService;