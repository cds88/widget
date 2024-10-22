import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import WidgetLabel from '../WidgetLabel';

describe('WidgetLabel', () => {
  test('renders WidgetLabel correctly with children', () => {
    const { asFragment } = render(<WidgetLabel>Test Label</WidgetLabel>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders WidgetLabel with additional props', () => {
    const { asFragment } = render(
      <WidgetLabel data-testid="custom-label" className="custom-class">
        Custom Props
      </WidgetLabel>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
