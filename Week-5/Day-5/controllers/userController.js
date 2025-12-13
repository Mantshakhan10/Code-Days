let users = [
  { id: 1, name: "Aman", age: 22 },
  { id: 2, name: "Sara", age: 25 }
];

exports.getAllUsers = (req, res) => {
  res.status(200).json(users);
};

exports.getUserById = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.status(200).json(user);
};

exports.createUser = (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ error: "Name and age required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    age
  };

  users.push(newUser);
  res.status(201).json(newUser);
};
