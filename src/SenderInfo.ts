interface SenderInfo {
  id?: string;
  uni: string;
  messenger: string;
  senderId: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  creationDate: Date;
  lastUpdatedDate: Date;
}

export { SenderInfo };
