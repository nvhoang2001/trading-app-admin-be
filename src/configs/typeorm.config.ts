import { Balance } from 'modules/balance/balance.entity'
import { Config } from 'modules/config/config.entity'
import { Feedback } from 'modules/feedback/feedback.entity'
import { Issue } from 'modules/issue/issue.entity'
import { Key } from 'modules/key/key.entity'
import { Transaction } from 'modules/transaction/transaction.entity'
import { User } from 'modules/user/user.entity'
import { VipBuyHistory } from 'modules/vip-buy-history/vip-buy-history.entity'
import { Vip } from 'modules/vip/vip.entity'
import { DataSource } from 'typeorm'

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  database: 'test',
  entities: ['src/modules/*/*.entity.ts'],
  // entities: [User],
  migrations: ['database/migrations/*.ts'],
})

export default AppDataSource
