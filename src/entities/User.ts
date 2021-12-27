import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;
  
  @Column()
  password: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  constructor() {
    /* 
    se meu id vier como nulo , undfinid , vazio  
    vair criar um id que seja igual ao uuid
  */
    if (!this.id) {
      this.id = uuid();
    }
  }
}

// Entidade < - > ORM < - > (users)
//                rRepository
export { User };
