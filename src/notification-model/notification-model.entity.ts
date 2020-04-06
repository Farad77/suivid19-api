import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

export enum Status {
    VALIDATE = 200,
    NEUTRAL = 204,
    ERROR = 400
  }

@Entity()
export class NotificationModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  text: string;

  @Column({
    type: 'enum',
    enum: Status
  })
  status: Status;

}