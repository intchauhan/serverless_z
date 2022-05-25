import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Leads } from "./Leads";

@Entity()
export class Interests {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Leads, (lead) => lead.id)
  @JoinColumn({ name: "lead_id" })
  lead_id?: Leads;

  @Column()
  message?: string;

  @CreateDateColumn()
  created_at?: Date;
}
