import { useEffect } from 'react';
import tw from "tailwind-styled-components";
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRhbTA0MDk5MiIsImEiOiJja3Z1dnk0cjQwNHF0Mm9waDB5bTNrejVtIn0.8tVmWw0pmqy6naxWM-N0xQ';

const Map = ({ pickupCoordinates, dropoffCoordinates }) => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29011, 39.39172],
          zoom: 3,
        })

        if(pickupCoordinates) {
          addToMap(map, pickupCoordinates)
        }

        if(dropoffCoordinates) {
          addToMap(map, dropoffCoordinates)
        }
        
        if(pickupCoordinates && dropoffCoordinates) {
          map.fitBounds([
            pickupCoordinates, 
            dropoffCoordinates
          ], {
            padding: 60
          })
        }

      }, [pickupCoordinates, dropoffCoordinates])

      const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
          .setLngLat(coordinates)
          .addTo(map);
      }
    

    return (
        <Wrapper id="map"></Wrapper>
    )
}

export default Map;

const Wrapper = tw.div`
    flex-1
`;
