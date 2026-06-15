const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
const dns = require("dns")

dns.setServers(["8.8.8.8", "1.1.1.1"])

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const conn = async () => {
    try {
        
        const dbConn = await mongoose.connect(
           // `mongodb+srv://${dbUser}:${dbPassword}@cluster0.bclt2cl.mongodb.net/?retryWrites=true&w=majority`
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.bclt2cl.mongodb.net/?appName=Cluster0`)

            console.log("Conectou com o banco")

            return dbConn
    } catch (error) {
        console.log(error)
    }
}

conn()

module.exports = conn