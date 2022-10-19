import express from 'express';

const router = express.Router();

import { getAllItems,
         getCategoryItems,
         getItem,
         deleteItem,
         addItem,
         updateItem,
         searchItem } from '../controllers/Items.js';
 

router.get('/all', getAllItems);
router.get('/all/:category', getCategoryItems);
router.get('/item/:id', getItem);
router.delete('/item/remove/:id', deleteItem);
router.post('/addItem', addItem);
router.post('/update/:id', updateItem);
router.get('/search', searchItem);

export default router;