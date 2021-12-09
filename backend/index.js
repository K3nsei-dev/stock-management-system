const express = require('express')
const port = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    try {
      const message = "Backend for Stock Management System"
      res.status(200).json({
        msg: message
      })
    } catch (error) {
      res.status(500).json([{
        error: error
      }])
    }
  })

  app.use('/api', require('./routes/login.js'))
  app.use('/api', require('./routes/getClinics.js'))
  app.use('/api', require('./routes/filteredClinics.js'))


app.listen(port, () => {
    console.log(`listening on http://localhost:${ port }`);
})