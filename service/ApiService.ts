import got from 'got';
import {readFileSync} from 'fs';

export class ApiService {
    async downloadToBase64(url: string) {
        const response = got(url);
        const buffer = await response.buffer();
        const base64 = Buffer.from(buffer).toString("base64");
        return base64;
    }

    readToBase64(imgPath: string) {
        console.log(imgPath, 'imgPath');
        const buffer = readFileSync(imgPath);
        const base64 = Buffer.from(buffer).toString("base64");
        return base64;
    }
}