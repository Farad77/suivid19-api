import { Entity, PrimaryGeneratedColumn, Column , OneToOne } from 'typeorm';
import { User } from 'src/users/users.entity';
import { Relative } from 'src/relatives/relatives.entity';

@Entity()
export class Tracking {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(User => User)
    carer: User;

    @OneToOne(Relative => Relative)
    newRelatives: Array<Relative>;

    @Column()
    alertLevel: number;

    @Column({ length: 255 })
    location: string;

    @Column()
    date: Date;

    @Column({ length: 255 })
    comment: string;

}