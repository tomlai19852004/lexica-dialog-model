import { BaseModel, SoftDelete, Uni, UserAction } from './Shared';

interface RequestResponseMapping extends BaseModel, Uni, UserAction, SoftDelete {
  requests: string[];
  responses: string[];
}

export { RequestResponseMapping };

export default RequestResponseMapping;
