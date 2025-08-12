const express = require('express');
const router = express.Router();

const Person = require('./../models/person')
router.post('/', async (req,res)=>{
    try{
    const data = req.body

    const newPerson = await Person(data);

    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
    
})
router.get('/:workType', async(req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType =='cheif' || workType =='manager'||workType=='waiter'){

            const response = await Person.find({work: workType});
            console.log('data fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid work type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
router.get('/',async (req, res)=>{
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
router.put('/:id', async(req,res)=>{
    try{
    const personId = req.params.id;
    const updatepersonData = req.body;


    const response = await Person.findByIdAndUpdate(personId, updatepersonData,{
        new : true,
        runValidators :true,
    })
    if(!response){
        res.status(404).json({message :'Id not found'})
    }
    console.log('Data updated succesfully');
    res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error :'Internal server error'});
    }
})
router.delete('/:id',async (req,res)=>{
  try{  const personId = req.params.id;

    const response = await Person.findByIdAndUpdate(personId,{
        new : true,
        runValidators: true,
    })
    if(!response){
        res.status(404).json('id is not found');
    }
    console.log('Data is deleted');
    res.status(200).json({message: 'Data delelted sucussfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})
module.exports = router; 