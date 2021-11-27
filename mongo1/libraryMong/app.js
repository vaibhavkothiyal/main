const express =require("express");
const mongoose=require("mongoose");

const connect=()=>{
    try{
        return mongoose.connect("mongodb://127.0.0.1:27017/library")
    }catch(e){
        console.log(e.message);
    }
}

const sectionSchema=new mongoose.Schema({
    name:{type:String,required:true},
    book_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book",
        required:true
    }]
})
const Section=mongoose.model("section",sectionSchema);


const bookSchema=new mongoose.Schema({
    name:{type:String,required:true},
    author_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"author",
        required:true
    }],
    checkout_status:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"checkout",
        required:true
    }
})
const Book=mongoose.model("book",bookSchema);


const authorSchema=new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true}
})
const Author=mongoose.model("author",authorSchema);


const checkoutSchema=new mongoose.Schema({
    book_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book",
        required:true
    },
    status:{type:String,required:true}
})
const Checkout=mongoose.model("checkout",checkoutSchema);

const app=express();
app.use(express.json());


//author 

app.post('/authors',async(req,res)=>{
    try{
        const author=await Author.create(req.body);
        res.send(author);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.get('/authors',async(req,res)=>{
    try{
        const author=await Author.find().lean().exec();
        res.send(author);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.get('/authors/:id',async(req,res)=>{
    try{
        const author=await Author.findById(req.params.id).lean().exec();
        res.send(author);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.patch('/authors/:id',async(req,res)=>{
    try{
        const author=await Author.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        res.send(author);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.delete('/authors/:id',async(req,res)=>{
    try{
        const author=await Author.findByIdAndDelete(req.params.id).lean().exec();
        res.send(author);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

//status

app.post('/status',async(req,res)=>{
    try{
        const status=await Checkout.create(req.body);
        res.send(status);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.get('/status',async(req,res)=>{
    try{
        const status=await Checkout.find().lean().exec();
        res.send(status);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.get('/status/:id',async(req,res)=>{
    try{
        const status=await Checkout.findById(req.params.id).lean().exec();
        res.send(status);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.patch('/status/:id',async(req,res)=>{
    try{
        const status=await Checkout.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        res.send(status);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.delete('/status/:id',async(req,res)=>{
    try{
        const status=await Checkout.findByIdAndDelete(req.params.id).lean().exec();
        res.send(status);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

//books

app.post('/books',async(req,res)=>{
    try{
        const books=await Book.create(req.body);
        res.send(books);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.get('/books',async(req,res)=>{
    try{
        const books=await Book.find().populate({path:"checkout_status",select:"status"}).lean().exec();
        res.send(books);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.get('/books/status/:inp',async(req,res)=>{
    let chkfor;
    if(req.params.inp=="avl"){
        chkfor="available";
    }else if(req.params.inp=="navl"){
        chkfor="not available";
    }
    try{
        const avalBooks=await Checkout.find({status:{$eq:chkfor}}).lean().exec();
        let books=[];
        for(let i=0;i<avalBooks.length;i++){
            let book=await Book.findById(avalBooks[i].book_id).lean().exec();
            books.push(book.name);
        }
        res.status(201).send(books);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.get('/books/author/:inp',async(req,res)=>{
    try{
        const avalBooks=await Author.find({first_name:{$eq:req.params.inp}}).lean().exec();
        let books=await Book.find().lean().exec();
        var ans=[];
        books.forEach( async function(el){
             await el.author_id.forEach(function(el2){
                if(el2.equals(avalBooks[0]._id)){
                     ans.push(el.name);
                 }
            });
        })
        if(ans.length>0){
            res.status(201).send(ans);
        }else{
            res.status(500).send("no results");
        }
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
});

app.get('/books/:id',async(req,res)=>{
    try{
        const books=await Book.findById(req.params.id).lean().exec();
        res.send(books);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.get('/books/:id',async(req,res)=>{
    try{
        const books=await Book.findById(req.params.id).lean().exec();
        res.send(books);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.patch('/books/:id',async(req,res)=>{
    try{
        const books=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        res.send(books);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.delete('/books/:id',async(req,res)=>{
    try{
        const books=await Book.findByIdAndDelete(req.params.id).lean().exec();
        res.send(books);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

//section CRAD

app.post('/sections',async(req,res)=>{
    try{
        const section=await Section.create(req.body);
        res.send(section);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.get('/sections',async(req,res)=>{
    try{
        const section=await Section.find().lean().exec();
        res.send(section);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
});

app.get('/section/:inp',async(req,res)=>{
    try{
        const section=await Section.find({name:{$eq:`section${req.params.inp}`}}).lean().exec();
        const totlBooks=section[0].book_id;
        var ans=[];
        for(var i=0;i<totlBooks.length;i++){
            let books=await Book.findById(totlBooks[i]).lean().exec();
            ans.push(books.name);
        }
        res.status(201).send(ans);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.get('/section/:inp/aval',async(req,res)=>{
    try{
        const section=await Section.find({name:{$eq:`section${req.params.inp}`}}).lean().exec();
        const totlBooks=section[0].book_id;
        let ans=[];
        for(let i=0;i<totlBooks.length;i++){
            let books=await Book.findById(totlBooks[i]).lean().exec();
            ans.push(books);
        }
        let avalBook=[];
        for(let i=0;i<ans.length;i++){
            let aval=await Checkout.findById(ans[i].checkout_status);
            if(aval.status=="available"){
                avalBook.push(ans[i].name);
            }
        }
        res.status(201).send(avalBook);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.get('/section/:inp/:auth',async(req,res)=>{
    try{
        const section=await Section.find({name:{$eq:`section${req.params.inp}`}}).lean().exec();
        const totlBooks=section[0].book_id;
        let authorBooks=[];
        for(let i=0;i<totlBooks.length;i++){
            let books=await Book.findById(totlBooks[i]).lean().exec();
            let authors=books.author_id;
            for(let j=0;j<authors.length;j++){
                let author=await Author.findById(authors[j]).lean().exec();
                if(author.first_name==req.params.auth){
                    authorBooks.push(books.name);
                }
            }
        }
        res.status(201).send(authorBooks);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.get('/sections/:id',async(req,res)=>{
    try{
        const section=await Section.findById(req.params.id).lean().exec();
        res.send(section);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.patch('/sections/:id',async(req,res)=>{
    try{
        const section=await Section.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        res.send(section);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.delete('/sections/:id',async(req,res)=>{
    try{
        const section=await Section.findByIdAndDelete(req.params.id).lean().exec();
        res.send(section);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})



app.listen(2348,async ()=>{
    await connect();
    console.log("testing express");
})