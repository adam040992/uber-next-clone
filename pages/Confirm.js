import { useEffect, useState } from 'react';
import tw from "tailwind-styled-components";
import Map from './components/Map'
import Router from 'next/router';


const Confirm = () => {

    const [ pickupCoordinates, setPickupCoordinates ] = useState();
    const [ dropoffCoordinates, setDropoffCoordinates ] = useState();

    const getPickupCoordinates = () => {
        const pickup = "Santa Monica";

        //Using fetch function
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiYWRhbTA0MDk5MiIsImEiOiJja3Z1dnk0cjQwNHF0Mm9waDB5bTNrejVtIn0.8tVmWw0pmqy6naxWM-N0xQ",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setPickupCoordinates(data.features[0].center);
        })
    }

    const getDropoffCoordinates = () => {
        const dropoff = "Los Angeles";

        //Using fetch function
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiYWRhbTA0MDk5MiIsImEiOiJja3Z1dnk0cjQwNHF0Mm9waDB5bTNrejVtIn0.8tVmWw0pmqy6naxWM-N0xQ",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center);
        })
    }
    
    useEffect(() => {
        getPickupCoordinates();
        getDropoffCoordinates();
    }, [])

    return (
        <Wrapper>
            <Map 
                pickupCoordinates={pickupCoordinates} 
                dropoffCoordinates={dropoffCoordinates} 
            />

            <RightContainer>
                Ride Selector
                Confirm Button
            </RightContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
    flex flex-col h-screen
`;

const RightContainer = tw.div`
    flex-1
`;