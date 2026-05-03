import { randomBytes } from 'crypto';

// well user this bc its
// - "cryptographically secure randomness"
// - low collision change ~ well need to check this
//
export function generateJoinCode(): string {
  return randomBytes(4).toString('hex').toUpperCase();
}
