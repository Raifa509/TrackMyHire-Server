const JSONServer=require('json-server')

const trackmyhire=JSONServer.create()
const router=JSONServer.router("db.json")
const middleware=JSONServer.defaults()
const PORT=3000 || process.env.PORT
trackmyhire.use(middleware)
trackmyhire.use(router)
trackmyhire.listen(PORT,()=>{
    console.log(`trackmyhire started at port : ${PORT} and waiting for client request`);
    
})