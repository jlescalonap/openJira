import { FC, useEffect, useReducer } from 'react';

import { entriesApi } from '../../apis/';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}

interface Props {
    children?: React.ReactNode | undefined
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
}

export const EntriesProvider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer, Entries_INITIAL_STATE );

    const addNewEntry = async ( description: string) => {

      const { data } = await entriesApi.post<Entry>('/entries', { description });
      dispatch({ type: '[Entry] Add-Entry', payload: data });

    }

    const updateEntry = ( entry: Entry ) => {
      dispatch({ type: '[Entry] Update-Entry', payload: entry });
    }
  
  const refreshEntries = async() => {
    const { data } = await entriesApi.get<Entry[]>('/entries');
    dispatch({ type: '[Entry] Load-Entries', payload: data });
    console.log('');
  }

  useEffect(() => {
    refreshEntries();
  }, []);
  

  return (
    <EntriesContext.Provider value={{
        ...state,
        addNewEntry,
        updateEntry,
    }}>
        { children }
    </EntriesContext.Provider>
  )
}