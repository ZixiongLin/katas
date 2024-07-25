export class ArgumentMashaler{
    private booleanValue = false;

    setBoolean(value:boolean){
        this.booleanValue = value
    }
    getBoolean(){
        return this.booleanValue
    }
}

export class BooleanArgumentMashaler extends ArgumentMashaler{}

export class StringArgumentMashaler extends ArgumentMashaler{}
export class IntegerArgumentMashaler extends ArgumentMashaler{}