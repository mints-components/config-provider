import { useContext } from 'react';

import { Context } from './context';

export const useConfigProvider = () => useContext(Context);
