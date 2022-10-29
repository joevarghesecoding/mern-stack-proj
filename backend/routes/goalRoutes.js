const express = require('express')
const router = express.Router()
const { getGoals, setGoals, updateGoal, deleteGoal } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware.js')

// router.get('/', getGoals)

// router.post('/', setGoals)

// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)
//OR

router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)


module.exports = router