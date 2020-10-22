// using literal strings instead of numbers so that it's easier to inspect
// debugger events
// 使用文字字符串而不是数字，以便更轻松地检查调试器事件
// 需要被跟踪的操作（Proxy）
export const enum TrackOpTypes {
  GET = 'get',
  HAS = 'has',
  ITERATE = 'iterate'
}
// 导致触发的操作（Proxy）
export const enum TriggerOpTypes {
  SET = 'set',
  ADD = 'add',
  DELETE = 'delete',
  CLEAR = 'clear'
}
