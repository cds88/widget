import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import WidgetButtonPanel from '../WidgetButtonPanel';

describe('WidgetButtonPanel', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(
      <WidgetButtonPanel checked={false} onChange={mockOnChange}>
        Test Widget
      </WidgetButtonPanel>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
