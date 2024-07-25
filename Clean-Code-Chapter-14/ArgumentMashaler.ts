export class ArgumentMashaler{
    private booleanValue = false;
    private stringValue;
    setBoolean(value:boolean){
        this.booleanValue = value
    }
    getBoolean(){
        return this.booleanValue
    }
    setString(s:string){
        this.stringValue = s;
    }

    getString(){
        return this.stringValue
    }
}

export class BooleanArgumentMashaler extends ArgumentMashaler{}

export class StringArgumentMashaler extends ArgumentMashaler{}
export class IntegerArgumentMashaler extends ArgumentMashaler{}