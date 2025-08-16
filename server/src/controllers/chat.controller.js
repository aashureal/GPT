const Chat = require("../models/Chat.model");

const createChat = async (req, res) => {
  const { title } = re.body;
  const user = req.user;

  await Chat.create({
    user: user._id,
    title,
  });
};

module.exports = { createChat };
