import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import WidgetBatteryTimeLeft from '../WidgetBatteryTimeLeft';
import { BATTERY_DATA_TEST_IDS } from './const.test';
import { convertHoursStateToReadableTime } from '../utils/convertHoursStateToReadableTime';

jest.mock('../utils/convertHoursStateToReadableTime', () => ({
  convertHoursStateToReadableTime: jest.fn((hours) => `${hours}h`),
}));

describe('WidgetBatteryTimeLeft Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders WidgetBatteryTimeLeft component without crashing', () => {
    const { getByText } = render(<WidgetBatteryTimeLeft hoursLeft={60} />);

    const textLabel = getByText('Time left', { exact: true });
    const effectiveValue = getByText('60h', { exact: true });

    expect(textLabel).toHaveTextContent('Time left');
    expect(effectiveValue).toHaveTextContent('60h');
  });

  test('displays the effective time left based on input', () => {
    const mockConvertHoursStateToReadableTime =
      convertHoursStateToReadableTime as jest.Mock;
    mockConvertHoursStateToReadableTime.mockReturnValue('90h');

    const { getByText } = render(<WidgetBatteryTimeLeft hoursLeft={90} />);

    expect(getByText('90h')).toBeInTheDocument();
    expect(convertHoursStateToReadableTime).toHaveBeenCalledWith(90);
  });

  test('displays 0h if no time left is passed', () => {
    const mockConvertHoursStateToReadableTime =
      convertHoursStateToReadableTime as jest.Mock;
    mockConvertHoursStateToReadableTime.mockReturnValue('0h');

    const { getByText } = render(<WidgetBatteryTimeLeft hoursLeft={0} />);

    expect(getByText('0h')).toBeInTheDocument();
  });

  test('displays BatteryIcon with correct styles', () => {
    const { getByTestId } = render(<WidgetBatteryTimeLeft hoursLeft={60} />);

    const batteryIcon = getByTestId(BATTERY_DATA_TEST_IDS.BATTERY_ICON);
    expect(batteryIcon).toBeInTheDocument();
    expect(batteryIcon).toHaveStyle({
      color: 'linear-gradient(white, #f0f0f0)',
    });
  });

  test('has correct wrapper styles applied', () => {
    const { container } = render(<WidgetBatteryTimeLeft hoursLeft={60} />);

    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyle({
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'space-between',
      'background-color': 'rgba(27, 60, 103, 255)',
      color: 'white',
      padding: '0px 1.5rem 0px 0.5rem',
      'border-radius': '8px',
    });
  });

  test('renders correct Typography for "Time left" and actual time', () => {
    const mockConvertHoursStateToReadableTime =
      convertHoursStateToReadableTime as jest.Mock;
    mockConvertHoursStateToReadableTime.mockReturnValue('45h');

    const { getByText } = render(<WidgetBatteryTimeLeft hoursLeft={45} />);

    expect(getByText(/Time left/i)).toBeInTheDocument();
    expect(getByText('45h')).toBeInTheDocument();
  });
 
});
