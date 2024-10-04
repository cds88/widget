import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import WidgetIndicator from '../WidgetIndicator';

describe('WidgetIndicator', () => {
  test('should render the WidgetIndicator and match snapshot for 0% percentage', () => {
    const { asFragment } = render(<WidgetIndicator percentage={0} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('should render the WidgetIndicator and match snapshot for 50% percentage', () => {
    const { asFragment } = render(<WidgetIndicator percentage={50} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('should render the WidgetIndicator and match snapshot for 100% percentage', () => {
    const { asFragment } = render(<WidgetIndicator percentage={100} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
