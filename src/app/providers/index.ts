import compose from 'compose-function';

import { withSuspense } from './with-suspense';

export const withProviders = compose(withSuspense);

export {WithErrorBoundary} from './with-errorboundary'
