import { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components";
import Map from './components/Map';

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>

        <Header>
          <UberLogo src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" />
          <Profile>
            <Name>Adam Walter</Name>
            <UserImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8iusw0RyH9Z6_3SKer7Gpa9Cv8Zc4MD3DWN4jYG1VHO0hBiNsRmioDtR3HYzvOmozrAc&usqp=CAU"/>
          </Profile>
        </Header>

        <ActionButtons>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
            Ride
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>

        {/* InputButton */}
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
  flex-1 p-4
`;

const Header = tw.div`
  flex justify-between items-center
`;

const UberLogo = tw.img`
  h-28
`;

const Profile = tw.div`
  flex items-center
`;

const Name = tw.div`
  mr-4 w-25 text-sm
`;

const UserImage = tw.img`
  h-12 w-12 rounded-full border-gray-200 p-px
`;

const ActionButtons = tw.div`
  flex
`;

const ActionButton = tw.div`
  flex  bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg
`;

const ActionButtonImage = tw.img`
  h-3/5
`;