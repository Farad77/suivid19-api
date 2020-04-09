import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from 'src/users/users.entity';
import { NotificationModel } from 'src/notification-model/notification-model.entity';

export enum Status {
  VALIDATE = 202,
  NEUTRAL = 404,
  ERROR = 400
}

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => User)
  @JoinColumn()
  user: Promise<User>;

  @Column({ length: 50 })
  type: string;
  
  @Column({ length: 255 })
  text: string;

  @Column()
  creationDate: Date;
  
  @Column()
  sendDate: Date;

  @Column()
  isViewed: boolean;

  @Column()
  viewDate: Date;

  @OneToOne(type => NotificationModel)
  @JoinColumn()
  model: Promise<NotificationModel>;

  @Column({
    type: 'enum',
    enum: Status
  })
  status: Status;

}