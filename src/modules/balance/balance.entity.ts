import { BaseEntity } from 'common/base.entity'
import { TABLE_NAME } from 'constants/table-name'
import { Column, Entity } from 'typeorm'

@Entity(TABLE_NAME.BALANCE)
export class Balance extends BaseEntity {
  @Column()
  symbol: string

  @Column()
  price: number

  @Column()
  amount: number

  @Column()
  platform: string
  // ==================================RELATIONSHIP==================================

  // ==================================EVENTS==================================
}
