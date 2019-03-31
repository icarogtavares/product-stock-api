const jwt = require('jsonwebtoken');
const securityParams = require('../../config').security;

/**
 * Gera o token para o login do usuário com validade de 7 dias
 * @param {Object} user - Usuário
 * @param {String} user.email - E-mail do usuário
 * @param {String} user.role - Nível de permissão do usuário ['admin', 'user']
 * @returns {String}
 */
const buildJwt = ({ email, role }) => {
  const payload = {
    data: {
      email,
      role,
    },
  };
  const token = jwt.sign(payload, securityParams.jwtSecret, {
    expiresIn: '7d',
  });
  return token;
};

/**
 * @typedef {Object} DecodedToken
 * @property {Object} data - Dados do usuário
 * @property {String} data.email - E-mail do usuário
 * @property {String} data.role - Nível de permissão do usuário ['admin', 'user']
 * @property {Number} iat - Issued at (Timestamp de quando o token foi criado)
 * @property {Number} exp - Expiration (Timestamp de quando o token irá expirar);
 */

/**
 * Verifica se o token é válido e retorna o token decodificado
 * @param {String} token - Token de acesso do usuário
 * @returns {DecodedToken}
 */
const verifyJwt = (token) => {
  const decoded = jwt.verify(token, securityParams.jwtSecret);
  return decoded;
};

/**
 * Retorna string de autorização para HEADER da requisição
 * @param {String} token Token de acesso do usuário
 */
const getHeaderAuthorizationString = token => `Bearer ${token}`;

module.exports = {
  buildJwt,
  verifyJwt,
  getHeaderAuthorizationString,
};
