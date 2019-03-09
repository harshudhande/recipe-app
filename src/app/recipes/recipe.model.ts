import { ingradient } from '../shared/ingradient.model';

export class recipe {
 public recipeName: string;
  public description: string;
  public imagePath: string;
  public ingradients: ingradient[];

  constructor(name: string, desc: string, path: string, ingradients: ingradient[]) {
    this.recipeName = name;
    this.description = desc;
    this.imagePath = path;
    this.ingradients = ingradients;
  }
}
