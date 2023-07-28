import { BaseEntity } from 'common/base.entity'
import { TransactionType } from 'common/common.enum'
import { TABLE_NAME } from 'constants/table-name'
import { Column, Entity } from 'typeorm'

@Entity(TABLE_NAME.TRANSACTION)
export class Transaction extends BaseEntity {
  @Column()
  coinId: string

  @Column()
  userId: number

  @Column()
  status: number

  @Column()
  price: number

  @Column()
  amount: number

  @Column({
    type: 'enum',
    enum: TransactionType,
    default: TransactionType.Buy,
  })
  type: TransactionType

  @Column()
  platform: number

  // ==================================RELATIONSHIP==================================

  // ==================================EVENTS==================================
}
