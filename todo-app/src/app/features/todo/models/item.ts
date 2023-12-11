export class Item {

  private _id: number;
  private _title: string;
  private _date: Date;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
    this._date = new Date();
  }

  public set id(value: number) {
    this._id = value;
  }
  public get id(): number {
    return this._id;
  }

  public get title(): string {
    return this._title;
  }

  public get date(): Date {
    return this._date;
  }
}

