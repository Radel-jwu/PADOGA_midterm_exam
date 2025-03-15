const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];

class Task {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

app.post('/tasks', (req, res) => {
  const { name, description } = req.body;
  const id = tasks.length + 1;  
  const newTask = new Task(id, name, description);
  tasks.push(newTask);
  res.status(201).json(newTask);  
});

app.get('/tasks', (req, res) => {
  res.status(200).json(tasks); 
});

app.get('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const task = tasks.find(task => task.id === parseInt(id));
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const task = tasks.find(task => task.id === parseInt(id));
  
  if (task) {
    task.name = name || task.name;  
    task.description = description || task.description;  
    res.status(200).json(task); 
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// 5. Delete a task by ID
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(task => task.id === parseInt(id));
  
  if (index !== -1) {
    const deletedTask = tasks.splice(index, 1);  // Remove task from array
    res.status(200).json({ message: 'Task deleted', task: deletedTask[0] });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
