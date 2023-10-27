import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'zellerBE/mock-server/schema.gql',
  documents: 'modules/queries/**/*.ts',
  generates: {
    './generated/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations'],
    },
  },
};

export default config;
