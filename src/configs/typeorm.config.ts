import ENV from 'constants/environment'
import { DataSource } from 'typeorm'

const AppDataSource = new DataSource({
  type: 'mysql',
  host: ENV.DB_HOST,
  port: +ENV.DB_PORT,
  username: ENV.DB_USERNAME,
  database: ENV.DB_NAME,
  password: ENV.DB_PASSWORD,
  entities: ['src/modules/*/*.entity.ts'],
  migrations: ['database/migrations/*.ts'],
})

export default AppDataSource
