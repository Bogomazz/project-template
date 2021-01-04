const express = require('express');
const categoriesRepository = require('../repositories/categories.repository');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(categoriesRepository.getAll());
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  res.json(categoriesRepository.getById(id));
})

router.post('/', (req, res) => {
  res.json(
    categoriesRepository.add(req.body.name)
  );
})

router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  res.json(
    categoriesRepository.updateCategoryName(id, req.body.name)
  );
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  categoriesRepository.removeCategory(id);
  res.status(204);
  res.json();
})

module.exports = router;
