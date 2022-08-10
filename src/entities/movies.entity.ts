import { Entity,  Column, PrimaryColumn } from "typeorm";

@Entity("movies")
export class Movie {
  @PrimaryColumn({
    type: "varchar",
  })
  id: string;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "varchar" })
  banner: string;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "varchar" })
  director: string;

  @Column({ type: "varchar" })
  producer: string;

  @Column({
    type: "date",
    unsigned: true,
    default: new Date().toISOString(),
  })
  created_at: string;
}
