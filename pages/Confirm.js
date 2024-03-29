import { useEffect, useState } from 'react';
import tw from "tailwind-styled-components";
import Map from './components/Map'
import { useRouter } from 'next/router';
import RideSelector from './components/RideSelector';
import Link from 'next/link';


const Confirm = () => {

    const router = useRouter()
    const { pickup, dropoff } = router.query;

    const [ pickupCoordinates, setPickupCoordinates ] = useState([0, 0]);
    const [ dropoffCoordinates, setDropoffCoordinates ] = useState([0, 0]);

    const getPickupCoordinates = (pickup) => {
        // const pickup = "Santa Monica";

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

    const getDropoffCoordinates = (dropoff) => {
        // const dropoff = "Los Angeles";

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
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href='/search'>
                    <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
                </Link>
            </ButtonContainer>

            <Map 
                pickupCoordinates={pickupCoordinates} 
                dropoffCoordinates={dropoffCoordinates} 
            />

            <RideContainer>
                <RideSelector 
                    pickupCoordinates={pickupCoordinates} 
                    dropoffCoordinates={dropoffCoordinates} 
                />

                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>

        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
    flex flex-col h-screen
`;

const RideContainer = tw.div`
    flex flex-1 flex-col h-1/2
`;

const ConfirmButtonContainer = tw.div`
    border-t-2
`;

const ConfirmButton = tw.div`
    bg-black text-white my-4 mx-4 py-4 text-center text-xl cursor-pointer
`;

const ButtonContainer = tw.div`
    rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`;

const BackButton = tw.img`
    h-full object-contain
`;