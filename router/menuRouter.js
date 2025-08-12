const express = require('express');
const router = express.Router();


const menu = require('./../models/menu');

router.post('/', async (req, res)=>{
   try{
    const data = req.body
    const newMenu = await menu(data);
    const response = await newMenu.save();
    console.log('data saved');
    res.status(200).json(response);
   }
   catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
   }
})

router.get('/', async (req,res)=> {
    try{
        const data = await menu.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({err :'Internal Server error'});
    }
})
router.get('./:taste', async (req,res)=>{
    try{
        const taste = req.params.taste ;
        if(taste =="Spicy"||taste=="Sour" ||taste =="Sweet" ){
            const response = await menu.find({taste :taste});
            console.log('data fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json('Invalid input');
        }
    }catch(err){
        console.log(err);
        res.status(500).json({err:'Internal server error'})
    }
})
router.put('/:id', async (req,res)=>{
    try{
        const personId = req.params.id;
        const updateddata = req.body;
        
        const response = await menu.findByIdAndUpdate(personId , updateddata, {
            new: true,
            runValidators: true ,
        });
        if(!response){
            return res.status(404).json({message: 'Menu not find'})
        }
        console.log('Data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({err: 'Internal server error '})
    }
})

router.delete('/:id', async (req, res)=>{
    try{
    const menuid = req.params.id;

    const response = await menu.findByIdAndDelete(menuid);
    if(!response){
        res.status(404).json({Message: 'Invalid id'})
    }
    console.log('data deleted');
    res.status(200).json({message:' data deleted sucessfully'})
}catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server issue'})
}
})
module.exports = router;