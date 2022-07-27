let express=require('express');
let app=express()
let dotenv=require('dotenv')
dotenv.config()
let Port=process.env.PORT|| 5000;
let db;

let mongo=require('mongodb')
let MongoClient=mongo.MongoClient;
// let mongoUrl=process.env.MongoLocalUrl;
let mongoUrl=process.env.MongoLiveUrl;

MongoClient.connect(mongoUrl,(err,client)=>{
    if(err) console.log(err)
    db = client.db('Flipkart')
    app.listen(Port,()=>{
        console.log(`Server started at ${Port}`)
    })
})

app.get('/',(req,res)=>{
    res.send('Hiii From Express')
})

app.get('/category',(req,res)=>{
    db.collection('category').find().toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

app.get('/category/fashion',(req,res)=>{
    db.collection('fashion').find().toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

// deals of day:
app.get('/category/fashion/deals/:id',(req,res)=>{
    let id=req.params.id;
    db.collection('fashion').find({DayDeals:Number(id)}).toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

app.get('/category/electronics',(req,res)=>{
    db.collection('electronics').find().toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

//deals of the day:
app.get('/category/electronics/deals/:id',(req,res)=>{
    let id=req.params.id;
    db.collection('electronics').find({DayDeals:Number(id)}).toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

// sort wrt to Price





app.get('/category/mobiles',(req,res)=>{
    db.collection('mobiles').find().toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
// Deals of the day
app.get('/category/mobiles/deals/:id',(req,res)=>{
    let id=req.params.id
    db.collection('mobiles').find({DayDeals:Number(id)}).toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

app.get('/products',(req,res)=>{
    db.collection('products').find().toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

