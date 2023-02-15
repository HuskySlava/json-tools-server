export class JsonModel {
    private readonly _json: string;
    private readonly _obj: object;

    constructor();
    constructor(json: string);
    constructor(obj: object);
    constructor(input?: string | object){
        if(typeof input === "object"){
            this._json = JSON.stringify(input);
            this._obj = input;
        } else if (typeof input === "string") {
            this._json = input;
            try {
                this._obj = JSON.parse(input);
            } catch (err){
                // TODO: error service, handling case
                console.log("[ERROR]", err);
            }
        }
    }

    get json() : string {
        return this._json;
    }

    get obj() : object {
        return this._obj;
    }
}
