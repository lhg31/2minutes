module.exports = {
  dialect: 'mariadb',
  host: '127.0.0.1',
  username: 'root',
  password: 'admin',
  database: '2minutes',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
