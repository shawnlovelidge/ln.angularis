import { AuthenticationConfig } from '../../lib/common/authentication-config';

describe('AuthenticationConfig', () => {
  it('should initialize with default values', () => {
    const config = new AuthenticationConfig();
    expect(config.baseUrl).toBe('');
  });

  it('should initialize with provided values', () => {
    const config = new AuthenticationConfig({
      baseUrl: 'https://api.example.com',
    });
    expect(config.baseUrl).toBe('https://api.example.com');
  });

  it('should override only specified properties', () => {
    const config = new AuthenticationConfig({
      baseUrl: 'https://custom-url.com',
    });
    expect(config.baseUrl).toBe('https://custom-url.com');
  });
});
