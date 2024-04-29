'use client';

import React from 'react';

import { companyLocation } from '@/config/location';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useMap } from '@/components/shared/yandex-map-provider';

type YandexMapProps = React.HTMLAttributes<HTMLDivElement>;

export const YandexMap = ({ className, ...props }: YandexMapProps) => {
  const {
    reactifyApi,
    reactifyMarkers,
    reactifyControls,
    reactifyExtraControls,
  } = useMap();

  if (
    !reactifyApi ||
    !reactifyMarkers ||
    !reactifyControls ||
    !reactifyExtraControls
  )
    return null;

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapControls,
    YMapMarker,
  } = reactifyApi;

  const { YMapDefaultMarker } = reactifyMarkers;

  const { YMapGeolocationControl, YMapZoomControl } = reactifyControls;

  const { YMapOpenMapsButton } = reactifyExtraControls;

  return (
    <YMap
      className='text-background'
      margin={[20, 20, 20, 20]}
      location={companyLocation}
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
        zIndex={1}
        coordinates={companyLocation.center}
        title={siteConfig.naming}
        subtitle={siteConfig.description}
      />
      <YMapMarker zIndex={10} coordinates={companyLocation.center}>
        <Icon.Logo className='size-6 -translate-x-2.5 -translate-y-12 text-foreground' />
      </YMapMarker>
    </YMap>
  );
};
