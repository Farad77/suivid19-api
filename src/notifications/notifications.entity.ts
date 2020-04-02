import { Entity, PrimaryGeneratedColumn, Column ,OneToOne } from 'typeorm';
import { User } from 'src/users/users.entity';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(User => User)
  user: User;

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

}