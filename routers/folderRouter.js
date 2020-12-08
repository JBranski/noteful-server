const express = require( 'express' );
const folderRouter = express.Router();
const jsonParser = express.json();
const folderService = require( './../services/folderService' );
// const noteService = require( '../services/noteService' );

folderRouter
	.get(( req, res, next ) => {
		folderService
			.getFolderById( req.app.get( 'db' ), id )
			.then( result => {
				res.json();
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