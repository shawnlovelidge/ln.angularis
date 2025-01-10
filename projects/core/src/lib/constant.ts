export const FILTER_TYPE_NONE = 0;
export const FILTER_TYPE_INTERNAL = 1;
export const FILTER_TYPE_EXTERNAL = 2;
export const FILTER_TYPE_INTERNAL_EXTERNAL = 4;

export enum HelpType {
  Undefined = 0,
  Default = 1,
  Information = 2,
  Warning = 3,
  Error = 4,
}

export enum ColumnCategory {
  Undefined = 0,
  Specific = 2,
  Interline = 4,
  Reference = 8,
  SupportInformation = 16,
}

export enum DropdownType {
  Undefined = 0,
  Standard = 1,
  Transparent = 2,
  Chip = 3,
}

export enum ListboxType {
  Undefined = 0,
  Standard = 1,
  Checkbox = 2,
  MultiSelect = 3,
  Folder = 4,
}

export enum ChipType {
  Undefined = 0,
  Standard = 1,
  Flag = 2,
}

export enum EventType {
  Undefined = 0,
  Add = 1,
  Edit = 2,
  Delete = 3,
  Select = 4,
  Click = 5,
  Remove = 6,
  Push = 7,
  Pull = 8,
  Notification = 9,
  Informational = 10,
  Warning = 11,
}

export enum ContextType {
  Undefined = 0,
  Component = 1,
  Account = 2,
  Module = 3,
  Service = 4,
  RestAPI = 5,
  SecurityContext = 6,
  UserProfile = 7,
  ClearNotification = 8,
  Notification = 9,
}

export enum MessageStatus {
  Undefined = 0,
  Error = 1,
  Flag = 2,
}

export enum Connection {
  Connecting = 0,
  Open = 1,
  Closing = 2,
  Closed = 3,
  Aborted = 4,
}

export enum AddressType {
  Business = 0,
  Home = 1,
  Other = 2,
  Work = 3,
}

export enum EmailType {
  Business = 0,
  Home = 1,
  Other = 2,
  Work = 3,
}

export enum PhoneType {
  Business = 0,
  Cell = 1,
  Home = 2,
  Other = 3,
  Work = 4,
}

export enum FileType {
  MicrosoftWord = 0,
  MicrosoftExcel = 1,
  Text = 2,
}

export enum StatusType {
  Undefined = 0,
  Active = 1,
  InActive = 2,
}

export enum Direction {
  Undefined = 0,
  Ascending = 1,
  Descending = 2,
}

export enum SelectionType {
  None = 0,
  Single = 1,
  MultiSelect = 2,
  MultiChecked = 3,
}

export enum Case {
  None = 0,
  Upper = 1,
  Lower = 2,
  Camel = 3,
}

export enum Layout {
  None = 0,
  Horizontal = 1,
  Vertical = 2,
}

export enum GridView {
  None = 0,
  Grid = 1,
  Vertical = 2,
}

export enum TableView {
  None = 0,
  Card = 1,
  Table = 2,
}

export enum WindowState {
  None = 0,
  Normal = 1,
  Open = 2,
  Closed = 3,
  Minimized = 4,
  Maximized = 5,
}

export enum Dock {
  None = 0,
  Top = 1,
  Bottom = 2,
  Left = 3,
  Right = 4,
}

export enum Command {
  Undefined = 0,
  Activated = 1,
  Deactivated = 2,
  Add = 3,
  Edit = 4,
  Delete = 5,
  Search = 6,
  Update = 7,
  Revert = 8,
  Download = 9,
  View = 10,
  OK = 11,
  Cancel = 12,
}

export enum ComponentType {
  Undefined = 0,
  AppMenu = 1,
  Banner = 2,
  Button = 3,
  Calendar = 4,
  CalendarCard = 5,
  Card = 6,
  CardProfile = 7,
  Category = 8,
  Checkbox = 9,
  Clock = 10,
  Command = 11,
  ComponentViewer = 12,
  Currency = 13,
  Date = 14,
  DatePicker = 15,
  DropDown = 16,
  DropdownType = 17,
  Footer = 18,
  Header = 19,
  Help = 20,
  Hyperlink = 21,
  Icon = 22,
  Image = 23,
  Json = 24,
  Message = 25,
  NavContainer = 26,
  NavMenu = 27,
  NavSideBar = 28,
  Notification = 29,
  Number = 30,
  Pagination = 31,
  Panel = 32,
  Percent = 33,
  RadioButton = 34,
  Search = 35,
  SearchGroup = 36,
  Tab = 37,
  TabContent = 38,
  Table = 39,
  TableFilter = 40,
  TableFooter = 41,
  TaskBar = 42,
  Text = 43,
  TextArea = 44,
  ToolTip = 45,
  Toolbar = 46,
  TypeAhead = 47,
}

export enum SetTimeOutDelay {
  Short = 10,
  Medium = 100,
  Long = 250,
}

export enum GridSchemaSelection {
  None = 0,
  Single = 1,
  Multi = 2,
}

export enum Equality {
  None = 0,
  Equal = 1,
  Not = 2,
  Between = 3,
  GreaterThan = 4,
  GreaterThanOrEqual = 5,
  LessThan = 6,
  LessthanOrEqual = 7,
}

export enum Checkbox {
  Checked = 1,
  Unchecked = 2,
  Deselect = 3,
}

export enum ReduxActionType {
  Add = 0,
  Update = 1,
  Delete = 2,
  Select = 3,
}

export enum StackActionType {
  Init = 0,
  Push = 1,
  Pop = 2,
}

export enum HttpActionType {
  Init = 0,
  Error = 1,
  Get = 2,
  Post = 3,
  Put = 4,
  Patch = 5,
  Delete = 6,
  Request = 7,
  Response = 8,
}

export default {
  FILTER_TYPE_NONE,
  FILTER_TYPE_INTERNAL,
  FILTER_TYPE_EXTERNAL,
  FILTER_TYPE_INTERNAL_EXTERNAL,

  HelpType,
  ColumnCategory,
  DropdownType,
  ListboxType,
  ChipType,
  EventType,
  ContextType,
  MessageStatus,
  Connection,
  AddressType,
  EmailType,
  PhoneType,
  FileType,
  StatusType,
  Direction,
  SelectionType,
  Case,
  GridView,
  TableView,
  WindowState,
  Dock,
  Command,
  ComponentType,
  SetTimeOutDelay,
  GridSchemaSelection,
  Equality,
  Checkbox,
  ReduxActionType,
  StackActionType,
  HttpActionType,
};
