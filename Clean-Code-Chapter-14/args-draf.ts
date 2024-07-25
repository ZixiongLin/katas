export class Args {
    schema:string;
    args:string[];
    valid:boolean = true;
    unpexpectedArguments = new Set();
    booleanArgs = new Map<string,boolean>()
    stringArgs = new Map<string,string>()
    intArgs = new Map<string,number>();
    currentArgument:number;
    errorArgumentId = "\0";
    errorParameter = "TLT";
    
}