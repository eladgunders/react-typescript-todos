module.exports = {
  roots: [
    '<rootDir>/tests'
  ],
  testMatch: [
    '/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        diagnostics: false,
        jsx: 'react'
      }
    ]
  },
  moduleDirectories: ['node_modules', 'src']
}
