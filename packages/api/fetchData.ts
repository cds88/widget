 
 
import { isWidgetTHR08State } from "@widget/organisms/WidgetTHR08/utils";
import {fetchWidgetState} from './fetchWidgetState'
import { WidgetTHR08State } from "@widget/organisms/WidgetTHR08/types";
 

export const fetchData = async (): Promise<WidgetTHR08State> => {
    const data = await fetchWidgetState();
    if (isWidgetTHR08State(data)) return data;
    throw new Error('Invalid data format');
  };
  