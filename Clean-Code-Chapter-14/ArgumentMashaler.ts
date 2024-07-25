export class ArgumentMashaler{
    private booleanValue = false;
    private stringValue;
    private integerValue
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

    setInteger(i:number){
        this.integerValue = i;
    }
    getInteger(){
        return this.integerValue
    }
}

export class BooleanArgumentMashaler extends ArgumentMashaler{}

export class StringArgumentMashaler extends ArgumentMashaler{}
export class IntegerArgumentMashaler extends ArgumentMashaler{}