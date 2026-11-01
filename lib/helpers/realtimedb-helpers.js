const logger = require('../logger');

const {
  client,
  retrieveCall,
  deleteCall,
  listCalls,
  listSortedSets,
  purgeCalls,
  retrieveSet,
  addKey,
  retrieveKey,
  deleteKey,
  incrKey,
  client: redisClient,
  listConferences,
  getCallCount
} = require('@jambonz/realtimedb-helpers')({}, logger);
/* consigai/consig-cdk-jam#155: reconnect to the new primary after a Valkey failover */
require('../utils/redis-failover').followFailover(client, logger);

module.exports = {
  client,
  retrieveCall,
  deleteCall,
  listCalls,
  listSortedSets,
  purgeCalls,
  retrieveSet,
  addKey,
  retrieveKey,
  deleteKey,
  redisClient,
  incrKey,
  listConferences,
  getCallCount
};
