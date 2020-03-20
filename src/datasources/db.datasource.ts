import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as devConfig from './db.datasource.config.json';

export class DataSourceSettings {
  name: string;
  connector: string;
  host?: string;
  username?: string;
  password?: string;
  database?: string;
}

let config: DataSourceSettings;

if (process.env.NODE_ENV === 'PRODUCTION') {
  config = devConfig;
} else {
  config = devConfig;
}
if (process.env.COUCHBASE_HOST) {
  config.host = process.env.COUCHBASE_HOST;
}
if (process.env.COUCHBASE_BUCKET_NAME) {
  config.database = process.env.COUCHBASE_BUCKET_NAME;
}
if (process.env.COUCHBASE_BUCKET_LOGIN) {
  config.username = process.env.COUCHBASE_BUCKET_LOGIN;
}
if (process.env.COUCHBASE_BUCKET_PWD) {
  config.password = process.env.COUCHBASE_BUCKET_PWD;
}

export class DbDataSource extends juggler.DataSource {
  static dataSourceName = 'db';

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
