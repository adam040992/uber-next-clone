import React from 'react';
import tw from "tailwind-styled-components";
import Link from 'next/link';


const Search = () => {
    return (
        <Wrapper>
            {/* Button Container */}
            <ButtonContainer>
                <Link href="/">
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </ButtonContainer>

            {/* Input Container */}
            <InputContainer>
                <FromToIcons>
                    <Circle src="https://img.icons8.com/ios/50/9CA3AF/filled-circle.png" />
                    <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                    <Square src="https://img.icons8.com/ios-filled/50/000000/rounded-square.png" />
                </FromToIcons>

                <InputBoxes>
                    <Input placeholder="Enter pickup location" />
                    <Input placeholder="Where to?" />
                </InputBoxes>

                <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />

            </InputContainer>

            {/* Saved Places */}
            {/* Confirm Location */}
        </Wrapper>
    )
}

export default Search;

const Wrapper = tw.div`
    flex flex-col h-screen bg-gray-200
`;

const ButtonContainer = tw.div`
    bg-white px-4
`;

const BackButton = tw.img`
    h-12 cursor-pointer
`;

const InputContainer = tw.div`
    bg-white flex items-center px-4 mb-2
`;

const FromToIcons = tw.div`
    w-10 flex flex-col mr-2
`;

const Circle = tw.img``;

const Line = tw.img``;

const Square = tw.img``;

const InputBoxes = tw.div`
    flex flex-col flex-1
`;

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`;

const PlusIcon = tw.img`
    w-10 h-10 bg-gray-200 rounded-full ml-3
`;