export enum UserRole {
  User = 1,
  UserVip = 2,
  Admin = 3,
  AdminVip = 4,
}

export enum UserStatus {
  Happy = 'Happy',
  Sad = 'Sad',
}

export enum VipBuyHistoryStatus {
  Processing = 1,
  Success = 2,
  Failed = 3,
}

export enum FeedBackStatus {
  Open = 1,
  Closed = 2,
}

export enum IssueStatus {
  Open = 1,
  InProgress = 2,
  ToBeTested = 3,
  Closed = 4,
}

export enum Severity {
  UnAppraisal = 1,
  Low = 2,
  Medium = 3,
  Critical = 4,
}

export enum TransactionType {
  Buy = 1,
  Sell = 2,
}

// ==========================================
export enum OrderBy {
  ASC = 'ASC',
  DESC = 'DESC',
}
