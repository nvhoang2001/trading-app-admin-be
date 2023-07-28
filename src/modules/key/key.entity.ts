import { BaseEntity } from 'common/base.entity'
import { TABLE_NAME } from 'constants/table-name'
import { Column, Entity } from 'typeorm'

@Entity(TABLE_NAME.KEY)
export class Key extends BaseEntity {
  @Column()
  publicKey: string

  @Column()
  secretKey: string

  @Column()
  platform: string
  // ==================================RELATIONSHIP==================================

  // ==================================EVENTS==================================
}
