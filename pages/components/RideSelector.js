import React, { useEffect, useState } from 'react';
import tw from "tailwind-styled-components";
import { carList } from '../data/carList';

console.log(carList);

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
    const [rideDuration, setRideDuration] = useState(0);

    useEffect(() => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYWRhbTA0MDk5MiIsImEiOiJja3Z1dnk0cjQwNHF0Mm9waDB5bTNrejVtIn0.8tVmWw0pmqy6naxWM-N0xQ`)
        .then((res) => res.json())
        .then(data => setRideDuration(data.routes[0].dustance / 100))
    }, [pickupCoordinates, dropoffCoordinates])

    return (
        <Wrapper>
            <Title>
                Choose a ride, or swipe for more
            </Title>

            <CarList>
                { carList.map((car, index) => (
                    <Car key={index}>
                        <CarImage src={car.imgUrl} />
                        <CarDetails>
                            <Service>
                                {car.service}
                            </Service>
                            <Time>6 min away</Time>
                        </CarDetails>
                        <Price>$24.00</Price>
                    </Car>
                )) }
            </CarList>

        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
    flex-1 flex flex-col overflow-y-scroll
`

const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b
`;

const CarList = tw.div`
    overflow-y-scroll
`;

const Car = tw.div`
    flex p-4 items-center
`;

const CarImage = tw.img`
    h-14 mr-4
`;

const CarDetails = tw.div`
    flex-1
`;

const Service = tw.div`
    font-medium
`;

const Time = tw.div`
    text-xs text-blue-500
`;

const Price = tw.div`
    text-sm
`;