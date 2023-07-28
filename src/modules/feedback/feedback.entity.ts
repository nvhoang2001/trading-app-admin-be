import { BaseEntity } from 'common/base.entity'
import { FeedBackStatus } from 'common/common.enum'
import { TABLE_NAME } from 'constants/table-name'
import { User } from 'modules/user/user.entity'
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm'

@Entity(TABLE_NAME.FEEDBACK)
export class Feedback extends BaseEntity {
  @Column()
  userId: number

  @Column()
  email: string

  @Column({ nullable: true })
  description?: string

  @Column({ nullable: true })
  reply?: string

  @Column({
    type: 'enum',
    enum: FeedBackStatus,
    default: FeedBackStatus.Open,
  })
  status: FeedBackStatus

  @Column({ nullable: true })
  note?: string

  @Column()
  title: string

  // ==================================RELATIONSHIP==================================
  @ManyToOne(() => User, (user) => user.feedbacks)
  user: User

  @OneToOne(() => User, (user) => user.username, { nullable: true }) // specify inverse side as a second parameter
  @JoinColumn({ name: 'createdBy', referencedColumnName: 'username' })
  createdByUser?: User

  @OneToOne(() => User, (user) => user.username, { nullable: true }) // specify inverse side as a second parameter
  @JoinColumn({ name: 'updatedBy', referencedColumnName: 'username' })
  updatedByUser?: User

  // ==================================EVENTS==================================
}
