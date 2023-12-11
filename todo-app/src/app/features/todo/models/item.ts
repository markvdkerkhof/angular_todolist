export class Item {

  private _id: number;
  private _title: string;
  private _date: Date;
  private _found: boolean;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
    this._date = new Date();
    this._found = false;
  }

  public set id(value: number) {
    this._id = value;
  }
  public get id(): number {
    return this._id;
  }

  public set found(value: boolean) {
    this._found = value;
  }
  public get found(): boolean {
    return this._found;
  }

  public get title(): string {
    return this._title;
  }

  public get date(): Date {
    return this._date;
  }
}

