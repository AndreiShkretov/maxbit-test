import { TextEncoder, TextDecoder } from "util";

declare global {
  var TextEncoder: typeof TextEncoder;
  var TextDecoder: typeof TextDecoder;
}

global.TextEncoder = TextEncoder as typeof global.TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;

import "@testing-library/jest-dom";
