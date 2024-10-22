import { convertHoursStateToReadableTime } from './convertHoursStateToReadableTime';

describe('convertHoursStateToReadableTime', () => {
    test('should convert 12.5 to 12:30h', () => {
        expect(convertHoursStateToReadableTime(12.5)).toBe('12:30h');
    });

    test('should convert 0 to 0h', () => {
        expect(convertHoursStateToReadableTime(0)).toBe('0h');
    });

    test('should convert 9.25 to 9:15h', () => {
        expect(convertHoursStateToReadableTime(9.25)).toBe('9:15h');
    });

    test('should convert 18.75 to 18:45h', () => {
        expect(convertHoursStateToReadableTime(18.75)).toBe('18:45h');
    });

    test('should convert 7.1 to 7:06h', () => {
        expect(convertHoursStateToReadableTime(7.1)).toBe('7:06h');
    });

    test('should convert 23.99 to 23:59h', () => {
        expect(convertHoursStateToReadableTime(23.99)).toBe('23:59h');
    });

    test('should convert 12 to 12h (without minutes)', () => {
        expect(convertHoursStateToReadableTime(12)).toBe('12h');
    });
});
