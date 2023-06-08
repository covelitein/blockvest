import { Sequelize }  from 'sequelize'

const sequelize = new Sequelize('blockvest', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;