const app = require('./server');
const db = require('./db').db;
const seeder = require('./seed');

db.sync({force: true})
.then(() => seeder())
.then(() => {
    app.listen(5000, () => {
        console.log('server running on PORT 5000!');
    })
})
 