import { BaseEntity } from 'common/base.entity'
import { IssueStatus, Severity } from 'common/common.enum'
import { TABLE_NAME } from 'constants/table-name'
import { Column, Entity } from 'typeorm'

@Entity(TABLE_NAME.ISSUE)
export class Issue extends BaseEntity {
  @Column()
  userId: number

  @Column()
  title: string

  @Column({ nullable: true })
  description?: string

  @Column({ nullable: true })
  group?: string

  @Column({
    type: 'enum',
    enum: IssueStatus,
    default: IssueStatus.Open,
  })
  status: IssueStatus

  @Column({ nullable: true })
  assignee?: string

  @Column({
    type: 'enum',
    enum: Severity,
    default: Severity.UnAppraisal,
  })
  severity: Severity

  @Column({ nullable: true })
  note?: string

  // ==================================RELATIONSHIP==================================

  // ==================================EVENTS==================================
}
