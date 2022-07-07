import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToMany, ManyToOne, JoinTable, JoinColumn} from "typeorm"

import { v4 as uuid } from "uuid"
import { User } from "./User";

@Entity("messages")
class Message {
    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    user_id: string;

    @Column()
    text: string;

    @JoinColumn({name: "user_id"})
    @ManyToOne(() => User)
    user: User;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    adminSent: boolean;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Message }