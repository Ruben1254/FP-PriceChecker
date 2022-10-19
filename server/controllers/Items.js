import db from "../connections/db.js";

export const getAllItems = (req,res) => {
    db('items')
  .select('*')
  .then(rows=>{
    res.json(rows)
  })
  .catch(e=>{
    console.log(e);
    res.status(404).json({msg:'not found'})
  })
};

export const getCategoryItems = (req,res) => {
  db('items')
  .select('*')
  .where({category:req.params.category})
  .then(rows =>{
    res.json(rows)
  })
  .catch(e =>{
    console.log(e);
    res.status(404).json({msg:'not found'})
  })
};

export const getItem = (req,res) => {
  db('items')
  .select('*')
  .where({item_id:req.params.id})
  .then(rows=>{
    res.json(rows)
  })
  .catch(e=>{
    console.log(e);
    res.status(404).json({msg:'not found'})
  })
}

export const deleteItem = (req,res) => {
  db('items')
  .select('*')
  .where({item_id:req.params.id})
  .del()
  .then(rows => {
    res.json(rows)
  })
}

export const addItem= (req,res) => {
  db('items')
  .insert(req.body)
  .returning("*")
  .then(rows =>{
    res.json(rows)
  })
  .catch(e=>{
    console.log(e);
    res.status(404).json({msg:'not found'})
  })
}

export const updateItem = (req,res) => {
  db('items')
  .update(req.body)
  .where({item_id:req.params.id})
  .returning("*")
  .then(rows =>{
    res.json(rows)
  })
  .catch(e=>{
    console.log(e);
    res.status(404).json({msg:'not found'})
  })
}

export const searchItem = (req,res)=>{
  db('items')
  .select('*')
  .whereILike('brand',`${req.query.brand}%`)
  .orWhereILike('type',`${req.query.type}%`)
  .then(rows=>{
    res.json(rows)
  })
  .catch(e=>{
    console.log(e);
    res.status(404).json({msg:'not found'})
  })
}