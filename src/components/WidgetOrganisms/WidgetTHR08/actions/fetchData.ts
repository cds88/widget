import { fetchWidgetState } from "../../../../utils/action";
import { WidgetTHR08State } from "../types";
import { isWidgetTHR08State } from "../utils";

export const fetchData = async (): Promise<WidgetTHR08State> => {
    const data = await fetchWidgetState();
    if (isWidgetTHR08State(data)) return data;
    throw new Error('Invalid data format');
  };