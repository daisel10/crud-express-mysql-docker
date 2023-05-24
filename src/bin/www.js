import app from '../app.js'
import configEnv from '../../config.js'
const PORT = configEnv.api.port

app.listen(PORT)
console.log(`server on port http://localhost:${PORT}`)
