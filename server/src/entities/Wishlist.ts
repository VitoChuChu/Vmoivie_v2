import {
  Entity,
  Column,
  CreateDateColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("wishlist")
export class Wishlist extends BaseEntity {
  @PrimaryGeneratedColumn()
  order: string;

  @Column({
    length: 100,
  })
  userID: string;

  @Column()
  movieID: string;

  @Column()
  title: string;

  @Column()
  releaseDate: string;

  @Column()
  posterPath: string;

  @CreateDateColumn()
  addDate: Date;
}
