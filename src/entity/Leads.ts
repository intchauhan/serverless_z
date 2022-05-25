import "reflect-metadata";
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Interests } from "./Interests";

@Entity()
@Index(["phone", "email"], { unique: true }) // setting unique phone and email combination and indexing
export class Leads {
  @PrimaryGeneratedColumn()
  @OneToMany((type) => Interests, (interest) => interest.lead_id)
  id?: number;

  @Column()
  email?: string;

  @Column()
  phone?: string;

  @Column()
  first_name?: string;

  @Column()
  last_name?: string;

  @CreateDateColumn()
  created_at?: Date;
}
