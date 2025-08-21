module.exports = {
    apps: [
      {
        name: 'personal-portfolio',
        port: '3000',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs',
        env_production: {
            NODE_ENV: 'production'
        },
        env_development: {
            NODE_ENV: 'development'
        }
      }
    ]
  }
  