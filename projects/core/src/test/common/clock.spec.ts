import { Library } from '../../lib/library';
import { Clock } from '../../lib/common/clock';
import { Interval } from '../../lib/common/interval';

describe('Clock Class', () => {
  let mockOptions: Partial<Clock>;
  let mockInterval: Interval;

  beforeEach(() => {
    mockInterval = new Interval();

    mockOptions = {
      time: new Date('2023-01-01T12:00:00Z'),
      interval: mockInterval,
    };
  });

  test('should initialize with default values', () => {
    const clock = new Clock(mockOptions);
    expect(clock.time).toBeInstanceOf(Date);
    expect(clock.interval).toBeInstanceOf(Interval);
  });

  test('should initialize with given options', () => {
    const clock = new Clock(mockOptions);
    expect(clock.time).toEqual(new Date('2023-01-01T12:00:00Z'));
    expect(clock.interval).toBe(mockInterval);
  });
});
