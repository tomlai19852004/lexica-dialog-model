enum ResponseType {
  TEXT = 'TEXT',
  OPTIONS = 'OPTIONS',
  ITEMS = 'ITEMS',
}

enum ItemType {
  AUDIO = 'AUDIO',
  FILE = 'FILE',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
}

interface Message {
  // locale id:
  // en-GB?: string;
  // en-US?: string;
  // zh-TW?: string;
  [key: string]: string;
}

interface Option {
  command: string;
  messages: Message[];
  features: { [key: string]: string };
  textOnlyIndicator: string;
}

interface Item {
  type: ItemType;
  url: string;
  messages: Message[];
}

interface BaseResponse {
  messages: Message[];
}

interface TextResponse extends BaseResponse {
  type: ResponseType.TEXT;
}

interface OptionResponse extends BaseResponse {
  type: ResponseType.OPTIONS;
  options: Option[];
  forceShow?: boolean;
}

interface ItemResponse extends BaseResponse {
  type: ResponseType.ITEMS;
  items: Item[];
}

type Response = TextResponse | OptionResponse | ItemResponse;

interface MissingFeatureResponse {
  response: Response;
  priority: number;
}

interface Intent {
  uni: string;
  command: string;
  category: string;
  subCategory?: string;
  sampleQuestion?: string;
  requiredFeatureKeys?: string[];
  responses: Response[];
  defaultFeatures?: { [key: string]: string };
  preProcessors?: string[];
  postProcessors?: string[];
  executors?: string[];
  sessionExpire?: number;
  missingFeatures?: { [key: string]: MissingFeatureResponse };
  fallbackCommand?: string;
}

export {
  ResponseType,
  ItemType,
  Message,
  Option,
  Item,
  BaseResponse,
  TextResponse,
  OptionResponse,
  ItemResponse,
  Response,
  MissingFeatureResponse,
  Intent,
};
