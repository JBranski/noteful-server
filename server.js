const knex = require( 'knex' );
const app = require( './app' );

const db = knex({
    client : 'pg',
    connection : 'postgres://gvqrgflxbfzitj:4369b01e21f49629bc9ad3632fdeb7b4a81d2d9f036bf1539aaa5b8aa792f2c8@ec2-52-205-3-3.compute-1.amazonaws.com:5432/dflr39evjdi8fv'
});

app.set( 'db', db );

app.listen( 8080, () => {
    console.log( "Server running in port 8080." );
});