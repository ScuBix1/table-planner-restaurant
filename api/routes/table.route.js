const express = require('express');
const router = express.Router();
const Table = require('../models/table.model');

router.get('/', async (req, res) => {
  const tables = await Table.find();
  res.json(tables);
});
router.post('/', async (req, res) => {
  try {
    const { numberTable, price, statusTable, typeMenu } = req.body;

    const table = new Table({
      numberTable,
      price,
      statusTable,
      typeMenu,
    });
    await table.save();
    return res.json(table);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});
router.put('/:id', async (req, res) => {
  try {
    const table = await Table.findByIdAndUpdate(req.params.id, req.body);
    if (!table) return res.status(404).json({ message: 'Table not found' });
    return res.json(table);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

module.exports = router;
