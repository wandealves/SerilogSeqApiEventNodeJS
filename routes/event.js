const { v4: uuidv4 } = require("uuid");

let events = [];

const list = (req, res) => {
  res.json(events);
};

const create = (req, res) => {
  const { code, title } = req.body;
  const newEvent = { id: uuidv4(), code, title };
  events.push(newEvent);
  res.status(201).json(newEvent);
};

const update = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const index = events.findIndex(event => event.id === id);
  if (index !== -1) {
    events[index].title = title;
    res.json(events[index]);
  } else {
    res.status(404).json({ mensagem: "Evento não encontrada" });
  }
};

const remove = (req, res) => {
  const { id } = req.params;
  const index = events.findIndex(event => event.id === id);
  if (index !== -1) {
    events.splice(index, 1);
    res.json({ mensagem: "Tarefa excluída com sucesso" });
  } else {
    logger.error("Tarefa não encontrada");
    res.status(404).json({ mensagem: "Tarefa não encontrada" });
  }
};

module.exports = { list, create, update, remove };
