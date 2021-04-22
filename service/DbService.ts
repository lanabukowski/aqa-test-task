import {Database} from 'sqlite3';
import { open } from 'sqlite';

export class DbService {
    async connectDb(dbPath: string) {
        const db = await open({
            filename: dbPath,
            driver: Database
          });
          return db;
    }
}