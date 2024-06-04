const express = require('express');
const {
  createSimpleRecord,
  createDetailedRecord,
  getRecords,
  getRecentRecords,
  getProgramRecords,
  updateRecord,
  deleteRecord,
  getRecordById,
} = require('../controllers/recordController');

const router = express.Router();

router.post('/simple', createSimpleRecord);
router.post('/detailed', createDetailedRecord);
router.get('/', getRecords);
router.get('/recent', getRecentRecords);
router.get('/program', getProgramRecords);
router.get('/:id', getRecordById);
router.put('/:id', updateRecord);
router.delete('/:id', deleteRecord);

module.exports = router;
