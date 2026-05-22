const { ActivityType } = require("discord.js");

module.exports = (client) => {
  console.log(`🤖 Logged in as ${client.user.tag}`);

  const statuses = [
    { name: "dsc.gg/darknezz", type: ActivityType.Watching }
  ];

  let i = 0;

  setInterval(() => {
    const status = statuses[i];

    client.user.setPresence({
      activities: [status],
      status: "online"
    });

    i = (i + 1) % statuses.length;
  }, 5000);
};
