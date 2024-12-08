'use client';
import { ReactNode, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';

type CacheOptions = {
  key: string;
};

type ThemeRegistryProps = {
  options: CacheOptions;
  children: ReactNode;
};

export const ThemeRegistry = ({ options, children }: ThemeRegistryProps) => {
  const [{ cache, flush }] = useState(() => {
    const cacheDefault = createCache(options);
    cacheDefault.compat = true;
    const prevInsert = cacheDefault.insert;
    let inserted: string[] = [];
    cacheDefault.insert = (...args) => {
      const serialized = args[1];
      if (cacheDefault.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }

      return prevInsert(...args);
    };
    const flushDefault = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };

    return { cache: cacheDefault, flush: flushDefault };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }

    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};
