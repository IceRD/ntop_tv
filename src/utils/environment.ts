export const environment = process.env
export const NODE_ENV = environment.NODE_ENV

export const isDevelopment = Object.is(NODE_ENV, 'development')
export const isProduction = Object.is(NODE_ENV, 'production')
