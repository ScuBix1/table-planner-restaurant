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
    res.json(table);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;