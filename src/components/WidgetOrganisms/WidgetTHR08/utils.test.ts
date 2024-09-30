 
import { WidgetTHR08State } from './types'; 
import { isWidgetTHR08State } from './utils';

describe('isWidgetTHR08State', () => {
  const validWidgetState: WidgetTHR08State = {
    brightness: 50,
    timeLeft: 120,
    nightVision: true,
    duskTillDawn: false,
    flashing: true,
  };

  it('should return true for valid WidgetTHR08State', () => {
    expect(isWidgetTHR08State(validWidgetState)).toBe(true);
  });

  it('should return false if any property is missing', () => {
    const invalidData = {
      brightness: 50,
      timeLeft: 120,
      nightVision: true,
      duskTillDawn: false,
      
    };
    expect(isWidgetTHR08State(invalidData)).toBe(false);
  });

  it('should return false if any property has the wrong type', () => {
    const invalidData = {
      brightness: 50,
      timeLeft: '120', 
      nightVision: true,
      duskTillDawn: false,
      flashing: true,
    };
    expect(isWidgetTHR08State(invalidData)).toBe(false);
  });

  it('should return false for null input', () => {
    expect(isWidgetTHR08State(null)).toBe(false);
  });

  it('should return false for undefined input', () => {
    expect(isWidgetTHR08State(undefined)).toBe(false);
  });

  it('should return false for non-object types (e.g., string, number, etc.)', () => {
    expect(isWidgetTHR08State('not an object')).toBe(false);
    expect(isWidgetTHR08State(123)).toBe(false);
    expect(isWidgetTHR08State(true)).toBe(false);
    expect(isWidgetTHR08State([])).toBe(false); 
  });

  it('should return false if extra properties are present but required ones are valid', () => {
    const invalidData = {
      brightness: 50,
      timeLeft: 120,
      nightVision: true,
      duskTillDawn: false,
      flashing: true,
      extraProperty: 'extra', 
    };
    expect(isWidgetTHR08State(invalidData)).toBe(true); 
  });

  it('should return false if an empty object is passed', () => {
    expect(isWidgetTHR08State({})).toBe(false);
  });
});
