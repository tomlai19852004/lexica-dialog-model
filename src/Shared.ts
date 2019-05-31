interface BaseModel {
  id?: string;
}

interface Uni {
  uni: string;
}

interface UserAction {
  createdBy?: string;
  createdAt?: Date;
  updatedBy?: string;
  updatedAt?: Date;
}

interface SoftDelete {
  deleted?: boolean;
  deletedBy?: string;
  deletedAt?: Date;
}

export { BaseModel, Uni, UserAction, SoftDelete };
