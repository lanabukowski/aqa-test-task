import {ApiService} from '../../service/ApiService'
import {strict as assert} from 'assert';

describe("api test", function() {
    it("compare picture", async function() {
        const service = new ApiService();
        const firstImg = await service.downloadToBase64('http://apimeme.com/meme?meme=Alarm-Clock&top=Top+text&bottom=Bottom+text');
        const secondImg = service.readToBase64('./example.jpeg');
        assert(firstImg === secondImg, 'images not the same');
    })
})