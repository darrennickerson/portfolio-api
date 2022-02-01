import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity('post')
export class Post extends AbstractEntity {
  @Column()
  title: string;

  @Column()
  body: string;

  @Column({ type: 'boolean', default: false })
  published: boolean;

  @Column({ type: 'boolean', default: false })
  reviewed: boolean;
}
