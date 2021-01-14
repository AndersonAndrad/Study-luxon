import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GameEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  developer: string;

  @Column()
  publisher: string;

  @Column()
  avaliable: string;

  @Column()
  platform: string;

  @Column()
  minimum_so: string;

  @Column()
  minimum_cpu: string;

  @Column()
  minimum_memory: number;

  @Column()
  minimum_storage: number;

  @Column()
  minimum_direct: number;

  @Column()
  minimum_gpu: string;

  @Column()
  recommended_so: string;

  @Column()
  recommended_cpu: string;

  @Column()
  recommended_memory: number;

  @Column()
  recommended_storage: number;

  @Column()
  recommended_direct: number;

  @Column()
  recommended_gpu: string;

  @Column()
  language_supported: string;

  @Column()
  policy: string;
}
