const NetaModel = require("../models/Neta.model")

async function readNetas(req,res){
    try{
        const allNetas = await NetaModel.find();
        // return res.status(200).json(allNetas)
        return res.status(200).render('index' , {allNetas})
    }
    catch(err){
        return res.status(404).json({message:"Error in the route"})
    }
}

async function showNewForm(req,res){
    try{
        res.status(200).render('new')
    }
    catch(err){
        return res.status(404).json({message:"Error in the route"})
    }
}


async function createNeta(req,res){
    try{
        console.log(req.body ,"body");
        let {name,isMale,party,isCorrupt} = req.body;
        let newNeta = await NetaModel.create({name,isMale,party,isCorrupt})
        // res.status(201).json(newNeta)
        return res.status(201).redirect('/api/netas')
    }
    catch(err){
        return res.status(404).json({message:"Error in the route"})
    }
}

async function showParticularNeta(req,res){
    try{
        let {id} = req.params;
        let foundNeta = await NetaModel.findById(id);
        return res.status(200).render('show' , {foundNeta})
    }
    catch(err){
        return res.status(404).json({message:"Error in the route"})
    }
}


async function showEditForm(req,res){
    try{
        let {id} = req.params;
        let foundNeta = await NetaModel.findById(id);
        res.status(200).render('edit' , {foundNeta} )
    }
    catch(err){
        return res.status(404).json({message:"Error in the route"})
    }
}

async function actuallyEditingNeta(req,res){
    try{
        let {id} = req.params;
        let {name,isMale,party,isCorrupt} = req.body;
        let editedData = await NetaModel.findByIdAndUpdate(id , {name,isMale,party,isCorrupt})
        res.status(200).redirect('/api/netas')
    }
    catch(err){
        return res.status(404).json({message:"Error in the route"})
    }
}

async function deletingNeta(req,res){
    try{
        let {id} = req.params;
        await NetaModel.findByIdAndDelete(id)
        res.status(200).redirect('/api/netas')
    }
    catch(err){
        return res.status(404).json({message:"Error in the route"})
    }
}


module.exports = {readNetas, showNewForm, createNeta, showParticularNeta,showEditForm,actuallyEditingNeta,deletingNeta}