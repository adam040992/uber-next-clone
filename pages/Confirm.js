import { useEffect } from 'react';
import tw from "tailwind-styled-components";
import Map from './components/Map'

const Confirm = () => {

    const getCoordinates = () => {
        const location = "Santa Monica";

        //Using fetch function
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiYWRhbTA0MDk5MiIsImEiOiJja3Z1dnk0cjQwNHF0Mm9waDB5bTNrejVtIn0.8tVmWw0pmqy6naxWM-N0xQ"
            })
        )
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }
    
    useEffect(() => {
        getCoordinates();
    }, [])

    return (
        <Wrapper>
            <Map />

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