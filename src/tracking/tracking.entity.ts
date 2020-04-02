import { Entity, PrimaryGeneratedColumn, Column , OneToOne, JoinColumn } from 'typeorm';
import { User } from 'src/users/users.entity';
import { Patient } from 'src/patients/patients.entity';

@Entity()
export class Tracking {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Patient)
    @JoinColumn()
    patient: Promise<Patient>;

    @OneToOne(type => User)
    @JoinColumn()
    carer: Promise<User>;

    @Column()
    alertLevel: number;

    @Column({ length: 255 })
    location: string;

    @Column()
    date: Date;

    @Column({ length: 255 })
    comment: string;

}