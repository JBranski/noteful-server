const express = require( 'express' );
const app = express();
const folderRouter = require( './routers/folderRouter' );
const noteRouter = require( './routers/noteRouter' );

app.use( '/api/folders', folderRouter );
app.use( '/api/notes', noteRouter );

app.use(folderRouter)

module.exports = app;