import { Endpoint } from '../../lib/common/endpoint';
import { Library } from '../../lib/library';

describe('Endpoint Class', () => {
  let mockOptions: Partial<Endpoint>;

  beforeEach(() => {
    mockOptions = {
      name: 'TestEndpoint',
      secure: false,
      requireToken: true,
      url: 'example.com',
      port: '8080',
      suffix: 'api',
      type: 'REST',
			headers: [{ key: 'Authorization', value: 'Bearer 1234' }],
    };
  });

  test('should initialize with default values', () => {
    const endpoint = new Endpoint();
    expect(endpoint.name).toBe('');
    expect(endpoint.secure).toBe(true);
    expect(endpoint.requireToken).toBe(true);
    expect(endpoint.url).toBe('');
    expect(endpoint.port).toBe('');
    expect(endpoint.suffix).toBe('');
    expect(endpoint.type).toBe('');
  });

  test('should initialize with given options', () => {
    const endpoint = new Endpoint(mockOptions);
    expect(endpoint.name).toBe('TestEndpoint');
    expect(endpoint.secure).toBe(false);
    expect(endpoint.requireToken).toBe(true);
    expect(endpoint.url).toBe('example.com');
    expect(endpoint.port).toBe('8080');
    expect(endpoint.suffix).toBe('api');
    expect(endpoint.type).toBe('REST');
  });

  test('hasHeaders() should return true when headers exist', () => {
    const endpoint = new Endpoint();
    expect(endpoint.hasHeaders()).toBe(false);
  });

  test('hasHeaders() should return true when headers exist', () => {
    const endpoint = new Endpoint(mockOptions);
    expect(endpoint.hasHeaders()).toBe(true);
  });

  test('hasPort() should return correct boolean', () => {
    const endpoint = new Endpoint(mockOptions);
    expect(endpoint.hasPort()).toBe(true);
  });

  test('hasUrl() should return correct boolean', () => {
    const endpoint = new Endpoint(mockOptions);
    expect(endpoint.hasUrl()).toBe(true);
  });

  test('compose() should return the correct URL', () => {
    const endpoint = new Endpoint(mockOptions);
    expect(endpoint.compose()).toBe('http://example.com:8080/api');
  });

  test('isSecure() should return correct boolean', () => {
    const endpoint = new Endpoint({ secure: false });
    expect(endpoint.isSecure()).toBe(false);
  });

  test('hasType() should return true if type is defined', () => {
    const endpoint = new Endpoint(mockOptions);
    expect(endpoint.hasType()).toBe(true);
  });
});
