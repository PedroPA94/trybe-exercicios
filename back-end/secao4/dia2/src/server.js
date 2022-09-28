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

  if (status) {
    const filteredActivities = activities
    .filter((act) => act.status.toLowerCase() === status.toLowerCase());

  res.status(200).json(filteredActivities);
  }

  res.status(404).send('Page not found');
});

app.get('/search/myActivities', (req, res) => {
  const { q: query } = req.query;
  const pattern = RegExp(`.*${query}.*`);

  if (query) {
    const filteredActivities = activities
    .filter((act) => pattern.test(act.description));

    res.status(200).json(filteredActivities);
  }

  res.status(404).send('Page not found');
});
