import { mapToApiServiceConfig } from './models/mappers/shipengine-api-client';
import { ShipEngineConfig } from './models/public';
import { ServiceFactory } from './services/service-factory';
import { ShipEngineApiClient } from './services/shipengine-api-factory';

export const ShipEngine = (config: ShipEngineConfig) => {
  return ServiceFactory(ShipEngineApiClient(mapToApiServiceConfig(config)));
};

export type {
  Address,
  AddressQuery,
  AddressQueryResult,
  ExceptionType,
  ShipEngineApiClientConfig,
  ShipEngineError,
  ShipEngineException,
  ShipEngineInfo,
  ShipEngineWarning,
} from './models/public';
