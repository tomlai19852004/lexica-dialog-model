enum Status {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

interface Issue {
  id?: string;
  uni: string;
  messenger: string;
  senderId: string;
  status: Status;
  openDate: Date;
  lastUpdatedDate: Date;
  closedDate?: Date;
}

export { Status, Issue };
