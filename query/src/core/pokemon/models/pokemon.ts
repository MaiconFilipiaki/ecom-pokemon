export default class Pokemon {
  private _id: number;
  private _name: string;
  private _images: string[];

  constructor(id: number = null, name: string = null, images: string[] = null) {
    this._id = id;
    this._name = name;
    this._images = images;
  }

  getId(): number {
    return this._id;
  }

  getName(): string {
    return this._name;
  }

  getImages(): string[] {
    return this._images;
  }

  set id(value: number) {
    this._id = value;
  }

  set name(value: string) {
    this._name = value;
  }

  set images(value: string[]) {
    this._images = value;
  }

}
