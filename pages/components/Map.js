import { useEffect } from 'react';
import tw from "tailwind-styled-components";
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRhbTA0MDk5MiIsImEiOiJja3Z1dnk0cjQwNHF0Mm9waDB5bTNrejVtIn0.8tVmWw0pmqy6naxWM-N0xQ';

const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29011, 39.39172],
          zoom: 3,
        })

        addToMap(map)
      },[])

      const addToMap = (map) => {
        const marker1 = new mapboxgl.Marker()
          .setLngLat([30.5, 50.5])
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
