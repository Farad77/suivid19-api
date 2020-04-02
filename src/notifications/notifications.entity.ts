import { Entity, PrimaryGeneratedColumn, Column, TableInheritance ,OneToOne, JoinColumn } from 'typeorm';
import { User } from 'src/users/users.entity';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'role' } })
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

}