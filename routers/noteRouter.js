const express = require( 'express' );
const noteRouter = express.Router();
const jsonParser = express.json();
const noteService = require( './../services/noteService' );

noteRouter
	.get('/', ( req, res, next ) => {
		noteService
			.getNotes( req.app.get( 'db' )) // or req.body.id  | doesnt need the /:id
			.then( result => {
				console.log(result)
				res.json(result);
			})
			.catch( next );
	})
	.post('/', jsonParser, ( req, res, next ) => {
		const newNote = {
			id : req.body.id,
			name : req.body.name,
			content: req.body.content,
			folderid: req.body.folderId,
			modified: req.body.modified
		};
		noteService
			.createNote( req.app.get( 'db' ), newNote )
			.then( result => {
				return res.status( 201 ).json( result );
			})
			.catch( next );
	})
	.delete('/:id', (req, res, next) => {
		noteService
			.deleteNote(
				req.app.get('db'),
				req.params.note_id
			)
			.then(result => {
				res.json(result)
			})
			.catch(next)
	})

module.exports = noteRouter;