import { LicenseType } from "./LicenseType";

export class License{
    static purchase():string{return ""};
}

export class LicenseDownload implements License{
    static purchase(){
        return LicenseType.DOWNLOAD
    }
}

export class LicenseStreaming implements License{
    static purchase() {
        return LicenseType.STREAMING
    }
}

export class LicenseBusiness implements License{
    static purchase() {
        return LicenseType.BUSINESS
    }
}