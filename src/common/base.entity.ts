import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @Column({ nullable: true })
  createdBy?: string

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date

  @Column({ nullable: true })
  updatedBy?: string

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt?: Date
}
