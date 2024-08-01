// Listign 14-7 Agrs.java (first draft)

import { ArgumentMashaler, BooleanArgumentMashaler, IntegerArgumentMashaler, StringArgumentMashaler } from "./ArgumentMashaler";

enum ERROR{
    OK,
    MISSING_STRING,
    MISSING_INTEGER,
    INVALID_INTEGER,
    UNEXPECTED_ARGUMENT
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

export class Args {
    schema:string;
    args:string[];
    valid:boolean = true;
    unexpectedArguments = new Set<string>();
    booleanArgs = new Map<string,ArgumentMashaler>()
    stringArgs = new Map<string,ArgumentMashaler>()
    intArgs = new Map<string,ArgumentMashaler>();
    argsFound = new Set<string>()
    currentArgument:number;
    errorArgumentId = "\0";
    errorParameter = "TLT";
    errorCode: ERROR = ERROR.OK

    constructor({schema, args}:{
        schema:string,
        args:string[]
    }){
        this.schema=schema,
        this.args=args;
        this.valid = this.parse();
    }

    parse() {
        if(this.schema.length == 0 && this.args.length == 0){
            return true;
        }
        this.parseSchema();
        try {
            this.parseArguments();
        } catch (error) {}
        return this.valid;
    }

    parseSchema(){
        for (const iterator of this.schema.split(",")) {
            if(iterator.length > 0){
                let trimmedElement = iterator.trim();
                this.parseSchemaElement(trimmedElement)
            }            
        }
        return true
    }

    parseSchemaElement(element:string){
        const elementId = element.charAt(0);
        const elementTail = element.substring(1);
        this.validateSchemaElementId(elementId);
        if(this.isBooleanSchemaElement(elementTail)){
            this.parseBooleanSchemaElement(elementId);
        }else if(this.isStringSchemaElement(elementTail)){
            this.parseStringElement(elementId)
        }else if(this.isIntegerSchemaElement(elementTail)){
            this.parseIntegerSchemaElement(elementId)
        }else{
            throw new Error(`Argument ${elementId} has invalid format: ${elementTail}`);
        }
    }

    validateSchemaElementId(elementId){
        if(!isLetter(elementId)){
            throw new Error(`Bad character ${elementId} in Args format: ${this.schema}`);
        }
    }
    parseBooleanSchemaElement(elementId){
        this.booleanArgs.set(elementId,new BooleanArgumentMashaler());
    }

    parseIntegerSchemaElement(elementId){
        this.intArgs.set(elementId,new IntegerArgumentMashaler());
    }
    parseStringElement(elementId){
        this.stringArgs.set(elementId,new StringArgumentMashaler());
    }
    isStringSchemaElement(elementTail:string){
        return elementTail == "*"
    }
    isBooleanSchemaElement(elementTail:string){
        return elementTail.length == 0;
    }
    isIntegerSchemaElement(elementTail:string){
        return elementTail == "#"
    }

    parseArguments(){
        for(let currentArgument = 0; currentArgument < this.args.length; currentArgument){
            const arg = this.args[currentArgument];
            this.parseArgument(arg)
        }
        return true;
    }

    parseArgument(arg:string){
        if(arg.startsWith("-")){
            this.parseElements(arg)
        }
    }

    parseElements(arg:string){
        for(let i = 0; arg.length; i++){
            this.parseElement(arg.charAt(i))
        }
    }

    parseElement(argChar){
        if(this.setArgument(argChar)){
            this.argsFound.add(argChar)
        }else{
            this.unexpectedArguments.add(argChar);
            this.errorCode = ERROR.UNEXPECTED_ARGUMENT,
            this.valid = false
        }
    }

    setArgument(argChar){
        if(this.isBooleanArg(argChar)){
            this.setBooleanArg(argChar,true);
        }else if(this.isStringArg(argChar)){
            this.setStringArg(argChar)
        }else if(this.isIntArg(argChar)){
            this.setIntArg(argChar)
        }else{
            return false
        }
        return true
    }

    isIntArg(argChar: string){
        return this.intArgs.has(argChar)
    }

    setIntArg(argChar: string){
        this.currentArgument++;
        let parameter:string|null = null;

        try {
            parameter = this.args[this.currentArgument];
            // this.intArgs.set(argChar, parseInt(parameter))
            this.intArgs.get(argChar)?.setInteger(parseInt(parameter))
        } catch (error) {
            this.valid = false;
            this.errorArgumentId = argChar;
            this.errorCode = ERROR.MISSING_INTEGER;
        }
    }

    setStringArg(argChar){
        this.currentArgument++;
        try {
//            this.stringArgs.set(argChar, this.args[this.currentArgument])
            this.stringArgs.get(argChar)?.setString(this.args[this.currentArgument])
        } catch (error) {
            this.valid = false;
            this.errorArgumentId = argChar;
            this.errorCode = ERROR.MISSING_STRING;
            throw new Error(" ERROR EN setString");
            
        }
    }

    isStringArg(argChar){
        return this.stringArgs.has(argChar)
    }

    setBooleanArg(argChar, value){
        this.booleanArgs.get(argChar)?.setBoolean(value)
    }


    isBooleanArg(argChar:string){
        return this.booleanArgs.has(argChar)
    }

    cardinality(){
        return this.argsFound.size
    }
    usage(){
        if(this.schema.length > 0){
            return `-[ ${this.schema} ]`
        }
        return "";
    }

    errorMessage(){
        switch (this.errorCode) {
            case ERROR.OK:
                throw new Error("TILT: Should not get here.");
            case ERROR.UNEXPECTED_ARGUMENT:
                return this.unexpectedArgumentMessage();
            case ERROR.MISSING_STRING:
                return `Could not find string parameters for ${this.errorArgumentId}`;
            case ERROR.INVALID_INTEGER:
                return `Argument ${this.errorArgumentId} expects an integer but was ${this.errorParameter}`
            case ERROR.MISSING_INTEGER:
                return `Could not find integer parameter for ${this.errorArgumentId}`
            default:
                return ""
        }
    }
    unexpectedArgumentMessage(){
        let msg = "Arguments (s) -";
        this.unexpectedArguments.forEach(unexpectedArgument => {
            msg.concat(unexpectedArgument);
        })
        msg.concat(" unexpected.")
        return msg;
    }

    falseIfNull(b:boolean| undefined | null){
        return b!=null && b;
    }
    zeroIfNull(i:number| undefined){
        return i == null ? 0 : i;
    }

    private blankIfNull(s:string| undefined) {
        return s == null ? "" : s;
    }

    getString(arg:string){
//        return this.blankIfNull(this.stringArgs.get(arg));
        let am= this.stringArgs.get(arg);
        return am == null ? "" :am.getString();
    }
    getInt(arg:string){
        // return this.zeroIfNull(this.intArgs.get(arg));
        let am = this.intArgs.get(arg);
        return am = null ? 0: am?.getInteger()
    }

    getBoolean(arg:string){
        let am = this.booleanArgs.get(arg)
        return am != null && am.getBoolean();
    }

    isValid() {
        return this.valid
    }


}    

class ArgsException {
    constructor(parameters) {}
}