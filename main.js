const app = require('./server');
const db = require('./db').db;

db.sync()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log('server running on PORT 5000!');
    })
})
 