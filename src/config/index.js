module.exports = {
  security: {
    jwtSecret: process.env.JWT_SECRET || 's3cr3tk3y',
    jwtSession: { session: false },
    salt: process.env.SALT || 's3cr3t_s4lt',
  },
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'product_stock',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: process.env.TEST_DB_USERNAME || 'root',
    password: process.env.TEST_DB_PASSWORD || null,
    database: process.env.TEST_DB_PASSWORD || 'product_stock_test',
    host: process.env.DB_HOST_TEST || '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'product_stock_production',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
  },
};
