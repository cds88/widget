import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import WidgetBatteryTimeLeft from '../WidgetBatteryTimeLeft';

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

  test('renders correctly with 5 hours left', () => {
    const { asFragment } = render(<WidgetBatteryTimeLeft hoursLeft={5} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
