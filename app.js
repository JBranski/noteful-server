const express = require( 'express' );
const app = express();
const cors = require('cors')
const folderRouter = require( './routers/folderRouter' );
const noteRouter = require( './routers/noteRouter' );

const corsOptions = {
	origin: 'https://notefulproject.vercel.app',
	optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use( '/api/folders', folderRouter );
app.use( '/api/notes', noteRouter );

app.use(folderRouter)

module.exports = app;