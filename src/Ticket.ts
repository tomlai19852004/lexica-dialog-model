import { Intent, Response } from './Intent';

enum TicketType {
  UPDATE = 'UPDATE',
  ADD = 'ADD',
  DELETE = 'DELETE',
}

enum TicketStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
}

interface BasePayload {
  action: TicketType;
}

interface UpdatePayload extends BasePayload {
  sampleQuestion: string;
}

interface AddPayload extends BasePayload {
  category: string;
  subCategory: string;
  sampleQuestion: string;
  responses: Response[];
}

interface DeletePayload extends BasePayload {
  delete: boolean;
}

interface Ticket {
  uni: string;
  userId: string;
  date: Date;
  status: TicketStatus;
  origin?: Intent;
  intentId?: string;
  payload: UpdatePayload | AddPayload | DeletePayload;
}

export { TicketStatus, TicketType, BasePayload, UpdatePayload, AddPayload, DeletePayload, Ticket };
