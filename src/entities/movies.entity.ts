import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn({
    unsigned: true,
    type: "int",
  })
  id: number;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "varchar" })
  banner: string;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "varchar" })
  producer: string;

  @Column({
    type: "date",
    unsigned: true,
    default: new Date().toISOString(),
  })
  created_at: string;
}
