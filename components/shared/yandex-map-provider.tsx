'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';
import Script from 'next/script';
import { ReactifiedModule } from '@yandex/ymaps3-types/reactify';
import ReactDOM from 'react-dom';

export type ReactifyApi = ReactifiedModule<
  typeof import('@yandex/ymaps3-types')
>;

export type ReactifyMarkers = ReactifiedModule<
  typeof import('@yandex/ymaps3-types/packages/markers')
>;

export type ReactifyControls = ReactifiedModule<
  typeof import('@yandex/ymaps3-types/packages/controls')
>;

export type ReactifyExtraControls = ReactifiedModule<
  typeof import('@yandex/ymaps3-types/modules/controls-extra')
>;

type YandexMapContext = {
  reactifyApi: ReactifyApi | null;
  reactifyMarkers: ReactifyMarkers | null;
  reactifyControls: ReactifyControls | null;
  reactifyExtraControls: ReactifyExtraControls | null;
};

export const YandexMapContext = createContext<YandexMapContext>({
  reactifyApi: null,
  reactifyMarkers: null,
  reactifyControls: null,
  reactifyExtraControls: null,
});

export const useMap = () => useContext(YandexMapContext);

type YandexMapProviderProps = {
  apiUrl: string;
  children?: React.ReactNode;
};

export const YandexMapProvider = ({
  apiUrl,
  children,
}: YandexMapProviderProps) => {
  const [reactifyApi, setReactifyApi] = useState<ReactifyApi | null>(null);
  const [reactifyMarkers, setReactifyMarkers] =
    useState<ReactifyMarkers | null>(null);
  const [reactifyControls, setReactifyControls] =
    useState<ReactifyControls | null>(null);
  const [reactifyExtraControls, setReactifyExtraControls] =
    useState<ReactifyExtraControls | null>(null);

  const contextValue = useMemo(
    () => ({
      reactifyApi,
      reactifyMarkers,
      reactifyControls,
      reactifyExtraControls,
    }),
    [reactifyApi, reactifyMarkers, reactifyControls, reactifyExtraControls]
  );

  return (
    <YandexMapContext.Provider value={contextValue}>
      <Script
        src={apiUrl}
        onLoad={async () => {
          const [
            ymaps3React,
            ymaps3Markers,
            ymaps3Controls,
            ymaps3ExtraControls,
          ] = await Promise.all([
            ymaps3.import('@yandex/ymaps3-reactify'),
            ymaps3.import('@yandex/ymaps3-markers@0.0.1'),
            ymaps3.import('@yandex/ymaps3-controls@0.0.1'),
            ymaps3.import('@yandex/ymaps3-controls-extra'),
            ymaps3.ready,
          ]);
          const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);
          setReactifyApi(reactify.module(ymaps3));
          setReactifyMarkers(reactify.module(ymaps3Markers));
          setReactifyControls(reactify.module(ymaps3Controls));
          setReactifyExtraControls(reactify.module(ymaps3ExtraControls));
        }}
      />
      {children}
    </YandexMapContext.Provider>
  );
};
