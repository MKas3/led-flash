'use client';

import React from 'react';

import { useMap } from '@/components/shared/yandex-map-provider';
import Icon from '@/components/ui/icon';
import { companyLocation } from '@/config/location';
import { siteConfig } from '@/config/site';

export const YandexMap = () => {
  const {
    reactifyApi,
    reactifyControls,
    reactifyExtraControls,
    reactifyMarkers
  } = useMap();

  if (
    !reactifyApi
    || !reactifyMarkers
    || !reactifyControls
    || !reactifyExtraControls
  )
    return null;

  const {
    YMap,
    YMapControls,
    YMapDefaultFeaturesLayer,
    YMapDefaultSchemeLayer,
    YMapMarker
  } = reactifyApi;

  const { YMapDefaultMarker } = reactifyMarkers;

  const { YMapGeolocationControl, YMapZoomControl } = reactifyControls;

  const { YMapOpenMapsButton } = reactifyExtraControls;

  return (
    <YMap
      className='text-background'
      location={companyLocation}
      margin={[20, 20, 20, 20]}
      showScaleInCopyrights
    >
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />
      <YMapControls position='left'>
        <YMapZoomControl />
        <YMapGeolocationControl />
      </YMapControls>
      <YMapControls position='top'>
        <YMapOpenMapsButton title='Открыть в Яндекс.Картах' />
      </YMapControls>
      <YMapDefaultMarker
        coordinates={companyLocation.center}
        subtitle={siteConfig.description}
        title={siteConfig.naming}
        zIndex={1}
      />
      <YMapMarker coordinates={companyLocation.center} zIndex={10}>
        <Icon.Logo className='size-6 -translate-x-2.5 -translate-y-12 text-foreground' />
      </YMapMarker>
    </YMap>
  );
};
