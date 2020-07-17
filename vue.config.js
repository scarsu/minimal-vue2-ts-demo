module.exports = {
  devServer:{
    before(app){
      app.get('/api/list',(req,res)=>{
        res.json([
          {id:1,name:'test1',select:true},
          {id:2,name:'test2',select:true}
        ])
      })
    }
  }
}