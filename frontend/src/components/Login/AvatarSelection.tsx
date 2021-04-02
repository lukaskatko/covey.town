import { Box, Center, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

class Avatar {
  private _name: string;

  private _id: string;

  private _imgSrc: string;

  get name(): string {
    return this._name;
  }

  get id(): string {
    return this._id;
  }

  get imgSrc(): string {
    return this._imgSrc;
  }

  constructor(name: string, id: string, imgSrc: string) {
    this._name = name;
    this._id = id;
    this._imgSrc = imgSrc;
  }
}

const avatars: Avatar[] = [
  new Avatar('JANE', 'J1', 'http://www.avatarsinpixels.com/Public/images/previews/minipix1.png'),
  new Avatar('FLURRY', 'F2', 'http://www.avatarsinpixels.com/Public/images/previews/minipix2.png'),
  new Avatar('LILA', 'L3', 'http://www.avatarsinpixels.com/Public/images/previews/minipix3.png'),
  new Avatar('CATMAN', 'C4', 'http://www.avatarsinpixels.com/Public/images/previews/minipix4.png'),
  new Avatar('DIANA', 'D5', 'http://www.avatarsinpixels.com/Public/images/previews/minipix5.png'),
  new Avatar('SARAH', 'S6', 'http://www.avatarsinpixels.com/Public/images/previews/minipix6.png'),
];

interface AvatarSelectionProps {
  setAvatarId: (avatarId: string) => void;
}

export default function AvatarSelection({ setAvatarId }: AvatarSelectionProps): JSX.Element {
  const [selectedAvatar, setSelectedAvatar] = useState<Avatar>(avatars[0]);
  useEffect(() => {
    setAvatarId(selectedAvatar.id);
  });

  const handleAvatarSelection = (avatar: Avatar) => {
    setSelectedAvatar(avatar);
    setAvatarId(avatar.id);
  };
  return (
    <>
      <Box p='4' borderWidth='1px' borderRadius='lg'>
        <Heading as='h2' size='lg'>
          Avatar Selection
        </Heading>
        <Text p='4'>Select your Covey avatar from the options below.</Text>

        <SimpleGrid columns={{ sm: 2, md: 3 }} bg='gray.50' borderWidth='1px' borderRadius='lg'>
          {avatars.map(avatar => (
            <Box
              key={avatar.id}
              fontWeight='semibold'
              as='h4'
              borderRadius='lg'
              bg={avatar.id === selectedAvatar.id ? 'green.200' : ''}
              onClick={e => handleAvatarSelection(avatar)}>
              <Center>
                <Image
                  boxSize='150px'
                  fit='contain'
                  src={avatar.imgSrc}
                  fallbackSrc='https://via.placeholder.com/150'
                />
              </Center>
              <Center color={avatar.id === selectedAvatar.id ? 'white' : ''}>{avatar.name}</Center>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
