import { ItemType, ResponseType } from './Intent';

enum MessageType {
  REQUEST = 'REQUEST',
  RESPONSE = 'RESPONSE',
}

enum RequestType {
  AUDIO = 'AUDIO',
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  FILE = 'FILE',
}

interface TextRequest {
  type: RequestType.TEXT;
  message: string;
}

interface FileRequest {
  type: RequestType.FILE | RequestType.IMAGE | RequestType.VIDEO | RequestType.AUDIO;
  path: string;
  contentType: string;
}

interface BaseResponse {
  message: string;
}

interface TextResponse extends BaseResponse {
  type: ResponseType.TEXT;
}

interface OptionsResponse extends BaseResponse {
  type: ResponseType.OPTIONS;
  options: Array<{
    command: string;
    features: { [index: string]: string };
    message: string;
    textOnlyIndicator: string;
  }>;
}

interface ItemsResponse extends BaseResponse {
  type: ResponseType.ITEMS;
  items: Array<{
    type: ItemType;
    url: string;
    message: string;
  }>;
}

type Request = TextRequest | FileRequest;
type Response = TextResponse | OptionsResponse | ItemsResponse;

interface Comment {
  text?: string;
  rating?: number;
  newType?: boolean;
}

interface BaseMessage {
  uni: string;
  messenger: string;
  date: Date;
  senderId: string;
  sessionId?: string;
  type: MessageType;

  issueId?: string;

  request?: Request;
  rawRequest?: any;
  commands?: string[];
  categories?: string[];
  subCategories?: string[];

  response?: Response;
  rawResponse?: any;

  comment?: Comment;
}

interface RequestMessage extends BaseMessage {
  type: MessageType.REQUEST;
  request: Request;
  rawRequest: any;
  commands: string[];
}

interface ResponseMessage extends BaseMessage {
  type: MessageType.RESPONSE;
  response: Response;
  rawResponse: any;
}

type Message = RequestMessage | ResponseMessage;

export {
  MessageType,
  RequestType,
  ResponseType,
  ItemType,
  TextRequest,
  FileRequest,
  BaseResponse,
  TextResponse,
  OptionsResponse,
  ItemsResponse,
  Request,
  Response,
  Comment,
  BaseMessage,
  RequestMessage,
  ResponseMessage,
  Message,
};
