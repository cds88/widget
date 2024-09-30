import { fetchWidgetState } from './action';

describe('fetchWidgetState', () => {
  it('resolves with the correct state', async () => {
    const expectedState = {
      brightness: 20,
      timeLeft: 12,
      nightVision: false,
      duskTillDawn: true,
      flashing: true,
    };

    const result = await fetchWidgetState();

    expect(result).toEqual(expectedState);
  });

  it('resolves after 2 seconds', async () => {
    const startTime = Date.now();

    await fetchWidgetState();

    const duration = Date.now() - startTime;

    expect(duration).toBeGreaterThanOrEqual(2000);
    expect(duration).toBeLessThan(2100);
  });

  it('is a promise', () => {
    const result = fetchWidgetState();
    expect(result).toBeInstanceOf(Promise);
  });
});
