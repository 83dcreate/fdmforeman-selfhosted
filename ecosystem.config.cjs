module.exports = {
  apps: [{
    name: "fdmforeman",
    script: "dist/index.cjs",
    cwd: "/opt/fdmforeman",
    instances: 1,
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: "production",
      PORT: "4000",
      DB_DIR: "/opt/fdmforeman/data",
      UPLOADS_DIR: "/opt/fdmforeman/uploads"
    }
  }]
};
