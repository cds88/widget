import { isWidgetTHR08State } from '../utils';
import { WidgetTHR08State } from '../types';
 

jest.mock('../../../../utils/action', () => ({
  fetchWidgetState: jest.fn(),
}));

jest.mock('../utils', () => ({
  isWidgetTHR08State: jest.fn(),
}));

describe('fetchData', () => {
  const mockValidWidgetState: WidgetTHR08State = {
    brightness: 20,
    timeLeft: 12,
    nightVision: false,
    duskTillDawn: true,
    flashing: true,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  // it('should return valid widget state when data format is correct', async () => {
  //   (fetchWidgetState as jest.Mock).mockResolvedValue(mockValidWidgetState);

  //   (isWidgetTHR08State as unknown as jest.Mock).mockReturnValue(true);

  //   const result = await fetchData();

  //   expect(fetchWidgetState).toHaveBeenCalledTimes(1);
  //   expect(isWidgetTHR08State).toHaveBeenCalledWith(mockValidWidgetState);
  //   expect(result).toEqual(mockValidWidgetState);
  // });

  // it('should throw an error when data format is invalid', async () => {
  //   const invalidData = { foo: 'bar' };

  //   (fetchWidgetState as jest.Mock).mockResolvedValue(invalidData);

  //   (isWidgetTHR08State as unknown as jest.Mock).mockReturnValue(false);

  //   await expect(fetchData()).rejects.toThrow('Invalid data format');

  //   expect(fetchWidgetState).toHaveBeenCalledTimes(1);
  //   expect(isWidgetTHR08State).toHaveBeenCalledWith(invalidData);
  // });

  // it('should throw an error if fetchWidgetState rejects', async () => {
  //   const errorMessage = 'Network error';

  //   (fetchWidgetState as jest.Mock).mockRejectedValue(new Error(errorMessage));

  //   await expect(fetchData()).rejects.toThrow(errorMessage);

  //   expect(fetchWidgetState).toHaveBeenCalledTimes(1);
  //   expect(isWidgetTHR08State).not.toHaveBeenCalled();
  // });
});
