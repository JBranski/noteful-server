const express = require( 'express' );
const noteRouter = express.Router();
const jsonParser = express.json();
const noteService = require( './../services/noteService' );

noteRouter
	.post( '/', jsonParser, ( req, res, next ) => {
		const newNote = {
			id : req.body.id,
			name : req.body.name
		};

		NoteService
			.createNote( req.app.get( 'db' ), newNote )
			.then( result => {
				return res.status( 201 ).json( result );
			})
			.catch( next );
	})

module.exports = noteRouter;