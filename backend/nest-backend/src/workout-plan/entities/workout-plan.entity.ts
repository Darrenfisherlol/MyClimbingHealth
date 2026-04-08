import {Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany} from 'typeorm';
import {Workout} from "../../workout/entities/workout.entity";

@Entity()
export class WorkoutPlan {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // owner side TypeORM  auto create many-to-many tbl
    @ManyToMany(() => Workout,(workout) => workout.workoutPlans)
    @JoinTable()
    workouts: Workout[]
}
