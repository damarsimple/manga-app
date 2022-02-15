module.exports = {
  apps: [
    {
      name: "nextjs",
      script: "yarn",
      args: "start",
      exec_mode: "cluster",
      instances: "max",
    },
  ],
};
