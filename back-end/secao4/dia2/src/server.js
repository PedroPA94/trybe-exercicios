const app = require('./app');
const activities = require('./activities');

const port = 3001;

app.listen(port, () => console.log(`Server running on port ${port}.`));

app.get('/myActivities', (_req, res) => {
  res.status(200).json(activities);
});

app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  const selectedActivity = activities.find((act) => act.id === Number(id));

  if (selectedActivity) res.status(200).json(selectedActivity);
  res.status(400).send('Bad request: invalid id');
});

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  const filteredActivities = activities
    .filter((act) => act.status.toLowerCase() === status.toLowerCase());

  res.status(200).json(filteredActivities);
});
