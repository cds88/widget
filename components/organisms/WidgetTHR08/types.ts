export type WidgetTHR08State = {
    brightness:number;
    timeLeft: number;
    nightVision: boolean;
    duskTillDawn: boolean;
    flashing: boolean;

} 

export type WidgetTHR08ButtonPanelsOptionsKeys = keyof Pick<WidgetTHR08State, 'nightVision' | 'flashing' | 'duskTillDawn'>

