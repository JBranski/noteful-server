const express = require( 'express' );
const folderRouter = express.Router();
const jsonParser = express.json();
const folderService = require( './../services/folderService' );
// const noteService = require( '../services/noteService' );

folderRouter
	.get('/:id', ( req, res, next ) => {
		folderService
			.getFolderById( req.app.get( 'db' ), req.params.id) // or req.body.id  | doesnt need the /:id
			.then( result => {
				console.log(result)
				res.json(result);
			})
			.catch( next );
	})
	.get('/', ( req, res, next ) => {
		folderService
			.getFolders( req.app.get( 'db' )) // or req.body.id  | doesnt need the /:id
			.then( result => {
				console.log(result)
				res.json(result);
			})
			.catch( next );
	})
	.post( '/folders', jsonParser, ( req, res, next ) => {
		const newFolder = {
			id : req.body.id,
			name : req.body.name
		};

		folderService
			.createFolder( req.app.get( 'db' ), newFolder )
			.then( result => {
				return res.status( 201 ).json( result );
			})
			.catch( next );
	})

module.exports = folderRouter;