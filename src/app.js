const http = require('http');
const port = process.env.PORT;

const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.USER,
    host: process.env.URL,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORTDB,
})

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log(`request`)
    pool.query('SELECT * FROM hihihi', (error, result) => {
        if (error) {
            throw error
        }
        res.end(result.rows[1].textt)
    })
});

server.listen(port, () => {
    console.log(`Server runnung at http://localhost:${port}/`)
});
