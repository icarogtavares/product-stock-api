module.exports = {
  security: {
    jwtSecret: process.env.JWT_SECRET || 's3cr3tk3y',
    jwtSession: { session: false },
    salt: process.env.SALT || 's3cr3t_s4lt',
  },
  development: {
    username: 'root',
    password: null,
    database: 'product_stock',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'product_stock_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'product_stock_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
