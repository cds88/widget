import { WidgetTHR08State } from "./types";

 
export function isWidgetTHR08State(data: any): data is WidgetTHR08State {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof data.brightness === 'number' &&
    typeof data.timeLeft === 'number' &&
    typeof data.nightVision === 'boolean' &&
    typeof data.duskTillDawn === 'boolean' &&
    typeof data.flashing === 'boolean'
  );
}
