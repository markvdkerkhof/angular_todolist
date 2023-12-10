export class Item {  

    private _title: string;
    private _date: Date;

    constructor(title: string, date: Date) {
        this._title = title;
        this._date = date; 
    }

    public get title(): string { 
        return this._title;
    }    

    public get date(): Date { 
        return this._date;
    }    
}

