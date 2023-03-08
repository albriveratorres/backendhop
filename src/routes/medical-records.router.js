const router = require('router');

router.get('/medical-records', (req, res) => {
  res.json([
    {
      nombre: 'Expediente 1',
      apellido: '1000',
    },
    {
      name: 'Paciente 2',
      apellido: '2000',
    },
  ]);
});

router.get('/medical-records/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'paciente 1',
    apellido: '2000'
  })
});
