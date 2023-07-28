import { BaseEntity } from 'common/base.entity'
import { TABLE_NAME } from 'constants/table-name'
import { Column, Entity } from 'typeorm'

@Entity(TABLE_NAME.CONFIG)
export class Config extends BaseEntity {
  @Column()
  userId: number

  @Column()
  alertAmount: number

  @Column()
  tradeTradeAmount: number

  @Column()
  tradeMinProfitAmount: number

  @Column()
  tradeActiveAmount: number

  @Column()
  crossMinProfitAmount: number

  @Column()
  crossTradeAmount: number

  @Column()
  crossActiveAmount: number

  @Column({ nullable: true })
  theme?: string

  @Column({ default: false })
  autoUpdateOption: boolean

  // ==================================RELATIONSHIP==================================

  // ==================================EVENTS==================================
}
