// @ts-nocheck
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-maps-react-markers';

import Point, { PointProps } from './Point';

import vw from '@/styles/utils';
import media from '@/styles/media';
import mapStyles from '@/styles/mapStyles';
import mapPoints from '@/data/mapPoints';

const grouse = {
  lat: 49.38011065308735,
  lng: -123.0814151374044,
};

const mapProps = {
  center: {
    lat: 49.34422712849525,
    lng: -123.0814151374044,
  },
  zoom: 12,
};

// 49.34422712849525, -123.07877278621565

const mapOptions = {
  styles: mapStyles,
  minZoom: 10,
  maxZoom: 14,
  zoomControl: false,
  fullscreenControl: false,
  disableDefaultUI: true,
  clickableIcons: false,
  controls: true,
};

interface Props {
  activeCategory?: number;
  handlePoint?: (index: number) => void;
}

const GoogleMap = ({ activeCategory, handlePoint }: Props) => {
  const [maps, setMaps] = useState<any>(null);
  const [map, setMap] = useState<any>(null);
  const [activePoint, setActivePoint] = useState(0);

  useEffect(() => {
    // When a category is selected, the bounds of the new pointed are calculated and the map is re-positioned to the center with the new points visible.
    if (maps) {
      const bounds = new maps.LatLngBounds();
      mapPoints.points.forEach((place: any) => {
        bounds.extend(new maps.LatLng(place.lat, place.lng));
      });

      bounds.extend(new maps.LatLng(mapProps.center.lat, mapProps.center.lng));
      map.fitBounds(bounds);
    }
  }, [activeCategory, map, maps]);

  // useEffect(() => {
  //   // When a point is selected, this makes sure its in view otherwise it moves it into view
  //   if (activePoint !== null && maps) {
  //     // Moves the map to the point if it is out of view
  //     let bounds = new maps.LatLngBounds();
  //     mapPoints.points.forEach((place: any) => {
  //       bounds.extend(new maps.LatLng(place.lat, place.lng));
  //     });

  //     bounds.extend(
  //       new maps.LatLng(
  //         mapPoints.points[activePoint].lat,
  //         mapPoints.points[activePoint].lng
  //       )
  //     );

  //     let currentMapCoords = map.getBounds();

  //     if (
  //       map
  //         .getBounds()
  //         .contains(
  //           new maps.LatLng(
  //             mapPoints.points[activePoint].lat,
  //             mapPoints.points[activePoint].lng
  //           )
  //         )
  //     ) {
  //       return;
  //     } else {
  //       currentMapCoords.extend(
  //         new maps.LatLng(
  //           mapPoints.points[activePoint].lat,
  //           mapPoints.points[activePoint].lng
  //         )
  //       );
  //       map.fitBounds(bounds);
  //     }
  //   }
  // }, [activePoint, activeCategory, map, maps]);

  // Return map bounds based on list of places
  const getMapBounds = (map: any, maps: any, places: any[]) => {
    setMap(map);
    setMaps(maps);

    const bounds = new maps.LatLngBounds();

    places.forEach((place) => {
      bounds.extend(new maps.LatLng(place.lat, place.lng));
    });

    bounds.extend(new maps.LatLng(mapProps.center.lat, mapProps.center.lng));

    return bounds;
  };

  // Re-center map when resizing the window
  const bindResizeListener = (map: any, maps: any, bounds: any) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
      });
    });
  };

  // Fit map to its bounds after the api is loaded
  const apiIsLoaded = (map: any, maps: any) => {
    // Get bounds by our places
    const bounds = getMapBounds(map, maps, mapPoints.points);
    // Fit map to bounds
    map.fitBounds(bounds);
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);
  };

  return (
    <Root className="map-container">
      <GoogleMapReact
        apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}
        defaultCenter={mapProps.center}
        defaultZoom={mapProps.zoom}
        options={mapOptions}
        // onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
      >
        <Grouse
          lat={grouse.lat}
          lng={grouse.lng}
          href="https://www.google.com/maps/place/Grouse+Mountain/@49.3801526,-123.0917577,15z/"
          target="_blank"
          rel="norefferer"
        >
          <p className="tan map-point">Grouse Mountain</p>
        </Grouse>
        {/* {mapPoints.points.map((point: any, p: number) => (
          <Point
            index={p}
            active={activePoint !== null && activePoint === p}
            handleClick={() => handlePoint(p)}
            lat={point.lat}
            lng={point.lng}
            text={point.text}
            key={p}
          />
        ))} */}
      </GoogleMapReact>
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  ${vw('width', '100%', '100%', '50%')}
  ${vw('height', 420, 500, 650)}
`;

type LogoProps = {
  lat: number | undefined;
  lng: number | undefined;
};

const Grouse = styled.a<LogoProps>`
  display: block;
  transform: translate(-50%, -100%);
  display: block;
  height: auto;
  background-color: ${({ theme }) => theme.color.darkPurple};
  width: fit-content;
  white-space: nowrap;
  transition: ${({ theme }) => theme.transition};
  ${vw('padding-top', 5)}
  ${vw('padding-bottom', 5)}
  ${vw('padding-left', 10)}
  ${vw('padding-right', 10)}
  p {
    transition: ${({ theme }) => theme.transition};
  }
  @media ${media.desktop} {
    &:hover {
      background-color: ${({ theme }) => theme.color.blue};
      p {
        color: ${({ theme }) => theme.color.darkPurple};
      }
    }
  }
`;

export default GoogleMap;
