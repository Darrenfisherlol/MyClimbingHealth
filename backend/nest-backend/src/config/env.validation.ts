export interface ValidatedEnv {
  NODE_ENV: string;
  PORT: number;
  DATABASE_HOST: string;
  DATABASE_PORT: number;
  DATABASE_USER: string;
  DATABASE_PASSWORD: string;
  DATABASE_NAME: string;
  DATABASE_SYNCHRONIZE: boolean;
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
  /** Comma-separated browser origins, e.g. `http://localhost:5173,https://app.example.com` */
  CORS_ORIGINS: string;
}

function parseBool(value: unknown, defaultValue: boolean): boolean {
  if (value === undefined || value === '') return defaultValue;
  if (typeof value === 'boolean') return value;
  const s = String(value).toLowerCase();
  if (s === 'true' || s === '1') return true;
  if (s === 'false' || s === '0') return false;
  return defaultValue;
}

export function validateEnv(config: Record<string, unknown>): ValidatedEnv {
  const nodeEnv = String(config.NODE_ENV ?? 'development');
  const jwtSecretRaw = config.JWT_SECRET;

  let jwtSecret: string;
  if (jwtSecretRaw !== undefined && jwtSecretRaw !== '') {
    jwtSecret = String(jwtSecretRaw);
  } else if (nodeEnv === 'production') {
    throw new Error('JWT_SECRET must be set when NODE_ENV is production');
  } else {
    // just a random key for dev
    jwtSecret = 'RandomKeyItDoesNotMatter';
  }

  const corsOrigins = config.CORS_ORIGINS !== undefined ? String(config.CORS_ORIGINS) : '';
  if (nodeEnv === 'production' && corsOrigins.trim() === '') {
    throw new Error(
      'CORS_ORIGINS must be set in production (comma-separated allowed origins, e.g. https://myapp.com)',
    );
  }

  return {
    NODE_ENV: nodeEnv,
    PORT: parseInt(String(config.PORT ?? '3000'), 10),
    DATABASE_HOST: String(config.DATABASE_HOST ?? 'localhost'),
    DATABASE_PORT: parseInt(String(config.DATABASE_PORT ?? '5432'), 10),
    DATABASE_USER: String(config.DATABASE_USER ?? 'postgres'),
    DATABASE_PASSWORD: String(config.DATABASE_PASSWORD ?? 'postgres'),
    DATABASE_NAME: String(config.DATABASE_NAME ?? 'Climb'),
    DATABASE_SYNCHRONIZE: parseBool(config.DATABASE_SYNCHRONIZE, true),
    JWT_SECRET: jwtSecret,
    // shorten for prod
    JWT_EXPIRES_IN: String(config.JWT_EXPIRES_IN ?? '7d'),
    CORS_ORIGINS: corsOrigins,
  };
}
