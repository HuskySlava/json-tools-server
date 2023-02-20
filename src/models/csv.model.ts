export class CSVModel {
    private readonly _csv: string;
    private readonly _obj: object;

    constructor();
    constructor(csv: string);
    constructor(obj: object);
    constructor(input?: string | object){
        if(typeof input === "object"){
            this._obj = input;
        } else if (typeof input === "string") {
            this._csv = input;
            try {
                this._obj = JSON.parse(input);
            } catch (err){
                // TODO: error service, handling case
                console.log("[ERROR]", err);
            }
        }
    }

    public toFlatCSV(obj: object): string {

        const objToFlatCsv = (obj): string => {
            const objArr = Object.entries(obj);
            let result = "";
            let nestCount = 0;

            objArr.forEach(item => {
                if(typeof item[1] === "object"){
                    nestCount++;
                    result += objToFlatCsv(item[1]);
                    nestCount--;
                } else {
                    result += `${item[0]},${item[1]}\r\n`;
                }
            });

            return result;
        };

        return objToFlatCsv(obj);

    }

    get csv() : string {
        return this._csv;
    }

    get obj() : object {
        return this._obj;
    }
}
