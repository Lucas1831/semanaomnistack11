const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express()

app.use(cors())
app.use(express.json());
app.use(routes);
/*Rota/ Recurso*/
/* Métodos HTTP:
*
*GET: Buscar informação do Back-end
*POST: Criar informação no Back-end
*PUT: Alterar informação do Back-end
*DELETE: deleta informações do Back-end
*/

/*Tipos de Parâmetros:
*
*Request Body:corpo da requisição. Criar ou alterar recursos.
*Query: parâmetros nomeados n rota após '?' (filtros, paginação);(?name=Lucas)
*Route: Parâmetros utilizados para identificar recursos;(/:id)
*/

/**
 * SQL: mySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB,etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users).select(*).where()
  */



app.listen(3332);