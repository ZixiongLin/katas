//Listing 14-1

class Args {
    constructor(...parameters) {
        
    }
    getBoolean(param:string){
        return true;
    }
    getInt(param:string){
        return 1
    }

    getString(param:string){
        return "";
    }
}

const main =(args:string[]) => {
    try{
        const arg = new Args("l,p#,d*", args);
        const loggin = arg.getBoolean("l");
        const port = arg.getInt("p")
        const directory = arg.getString("d");
    }catch(e){
        console.log(e)
    }
}