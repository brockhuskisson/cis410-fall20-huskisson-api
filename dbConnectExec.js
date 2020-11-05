const sql = require('mssql')

const config = {
    user: 'csu',
    password: 'Uuxwp7Mcxo7Khy',
    server: 'cobazsqlcis410.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
    database: 'RWStudios',
}

async function executeQuery(aQuery){
    var connection = await sql.connect(config)
    var result = await connection.query(aQuery)

   return result.recordset
}

module.exports = {executeQuery: executeQuery}
// executeQuery(`SELECT *
// from movie
// LEFT JOIN genre
// ON genre.GenrePK = movie.GenreFK`)
