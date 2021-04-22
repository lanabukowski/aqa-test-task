import {DbService} from '../../service/DbService'
import {strict as assert} from 'assert';

describe("db test", async function() {
    const service = new DbService();
    it("US population density", async function() {
        const db = await service.connectDb('./Countries.db');
        const result = await db.all('SELECT Population/Area as Density, Country FROM Countries Where Density < 50')
        assert(result.length === 1 && result[0].Country === 'USA', 'density test is failed');
    })
    it("sum of the population of all countries", async function() {
        const db = await service.connectDb('./Countries.db');
        const result = await db.all('SELECT SUM(Population) as AllPopulation FROM Countries')
        assert(result[0].AllPopulation < 2000000000, 'sum of the population of all countries is more than 2 billion');
    })
})