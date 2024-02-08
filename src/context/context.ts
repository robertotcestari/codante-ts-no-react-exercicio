import { createContext } from 'react';
import { Quote } from '../lib/types';

type InitialState = {
  bgColor: string;
  quote: Quote | null;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
  setQuote: React.Dispatch<React.SetStateAction<Quote | null>>;
};

const INITIAL_STATE = {
  bgColor: '#666',
  quote: null,
} as InitialState;

const context = createContext(INITIAL_STATE);

export default context;
