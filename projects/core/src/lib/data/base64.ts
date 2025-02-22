/* tslint:disable */
export class Base64 {
  private ALPHA: string;
  private PADCHAR: string;

  getByte(s: string, i: number) {
    const x = s.charCodeAt(i);
    return x;
  }

  getByte64(s: string, i: number) {
    const idx = this.ALPHA.indexOf(s.charAt(i));
    return idx;
  }

  decode(s: string) {
    let pads = 0,
      i,
      b10,
      imax = s.length,
      x: string[] = [];

    s = String(s);

    if (imax === 0) {
      return s;
    }

    if (s.charAt(imax - 1) === this.PADCHAR) {
      pads = 1;
      if (s.charAt(imax - 2) === this.PADCHAR) {
        pads = 2;
      }
      imax -= 4;
    }

    for (i = 0; i < imax; i += 4) {
      b10 =
        (this.getByte64(s, i) << 18) |
        (this.getByte64(s, i + 1) << 12) |
        (this.getByte64(s, i + 2) << 6) |
        this.getByte64(s, i + 3);
      x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 255, b10 & 255));
    }

    switch (pads) {
      case 1:
        b10 =
          (this.getByte64(s, i) << 18) |
          (this.getByte64(s, i + 1) << 12) |
          (this.getByte64(s, i + 2) << 6);
        x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 255));
        break;
      case 2:
        b10 = (this.getByte64(s, i) << 18) | (this.getByte64(s, i + 1) << 12);
        x.push(String.fromCharCode(b10 >> 16));
        break;
      default:
        break;
    }

    return x.join('');
  }

  encode(s: string) {
    s = String(s);

    let i,
      b10,
      x: string[] = [],
      imax = s.length - (s.length % 3);

    if (s.length === 0) {
      return s;
    }

    for (i = 0; i < imax; i += 3) {
      b10 =
        (this.getByte(s, i) << 16) |
        (this.getByte(s, i + 1) << 8) |
        this.getByte(s, i + 2);
      x.push(this.ALPHA.charAt(b10 >> 18));
      x.push(this.ALPHA.charAt((b10 >> 12) & 63));
      x.push(this.ALPHA.charAt((b10 >> 6) & 63));
      x.push(this.ALPHA.charAt(b10 & 63));
    }

    switch (s.length - imax) {
      case 1:
        b10 = this.getByte(s, i) << 16;
        x.push(
          this.ALPHA.charAt(b10 >> 18) +
            this.ALPHA.charAt((b10 >> 12) & 63) +
            this.PADCHAR +
            this.PADCHAR
        );
        break;
      case 2:
        b10 = (this.getByte(s, i) << 16) | (this.getByte(s, i + 1) << 8);
        x.push(
          this.ALPHA.charAt(b10 >> 18) +
            this.ALPHA.charAt((b10 >> 12) & 63) +
            this.ALPHA.charAt((b10 >> 6) & 63) +
            this.PADCHAR
        );
        break;
      default:
        break;
    }

    return x.join('');
  }

  constructor() {
    this.PADCHAR = '=';
    this.ALPHA =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  }
}
/* tslint:enable */
