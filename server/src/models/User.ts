import {
  Entity,
  Column,
  CreateDateColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  userID: string;

  @Column({ length: 30 })
  userName: string;

  @Column({ unique: true })
  userEmail: string;

  @Column({ length: 100 })
  password: string;

  @CreateDateColumn()
  joinDate: Date;
}
