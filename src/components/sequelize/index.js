const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const validator = require('validator');

const env = process.env.NODE_ENV || 'development';
const config = require('../../config').sequelize[env];

const db = {};

let sequelize;
const defaults = {
  operatorsAliases: Sequelize.Op,
  pool: {
    max: 10,
    min: 0,
    idle: 10000,
  },
  define: { underscored: true, freezeTableName: true },
};

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable],
    Object.assign({}, defaults, config));
} else if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL,
    Object.assign({}, defaults, config));
} else {
  sequelize = new Sequelize(config.database,
    config.username,
    config.password,
    Object.assign({}, defaults, config));
}

const componentsDir = path.join(__dirname, '..');
fs
  .readdirSync(componentsDir)
  .forEach((dir) => {
    const directoryToFile = path.join(componentsDir, dir);
    if (fs.statSync(directoryToFile).isDirectory()) {
      fs
        .readdirSync(directoryToFile)
        .filter((file) => {
          const dirToFile = path.join(directoryToFile, file);
          return (fs.statSync(dirToFile).isFile())
            && (directoryToFile !== __dirname)
            && (/^model.js$/.test(file));
        })
        .forEach((file) => {
          const model = sequelize.import(path.join(directoryToFile, file));
          /**  @type {Model} */
          db[model.name] = model;
        });
    }
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.validator = validator;

// sequelize.sync()
//   .then(() => {
//     console.log('Database created!');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = db;
