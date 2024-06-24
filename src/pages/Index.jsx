import React, { useState } from "react";
import { Box, Container, Flex, VStack, Heading, Text, Image, IconButton, Progress } from "@chakra-ui/react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState({
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    cover: "https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_At_The_Opera.png"
  });

  const playlist = [
    { title: "Bohemian Rhapsody", artist: "Queen", album: "A Night at the Opera" },
    { title: "Stairway to Heaven", artist: "Led Zeppelin", album: "Led Zeppelin IV" },
    { title: "Hotel California", artist: "Eagles", album: "Hotel California" },
    { title: "Imagine", artist: "John Lennon", album: "Imagine" },
    { title: "Like a Rolling Stone", artist: "Bob Dylan", album: "Highway 61 Revisited" },
  ];

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <Container maxW="container.xl" py={8}>
      <Flex direction={{ base: "column", md: "row" }} gap={8}>
        <Box flex={1}>
          <Heading mb={4}>Your Playlist</Heading>
          <VStack align="stretch" spacing={4}>
            {playlist.map((song, index) => (
              <Box key={index} p={3} bg="gray.100" borderRadius="md" cursor="pointer"
                   onClick={() => setCurrentSong(song)}>
                <Text fontWeight="bold">{song.title}</Text>
                <Text fontSize="sm">{song.artist} - {song.album}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box flex={1}>
          <VStack spacing={4} align="center">
            <Image src={currentSong.cover} alt={currentSong.title} boxSize="300px" objectFit="cover" borderRadius="md" />
            <Heading size="md">{currentSong.title}</Heading>
            <Text>{currentSong.artist} - {currentSong.album}</Text>
            <Progress value={30} width="100%" />
            <Flex>
              <IconButton aria-label="Previous song" icon={<FaStepBackward />} mr={2} />
              <IconButton
                aria-label={isPlaying ? "Pause" : "Play"}
                icon={isPlaying ? <FaPause /> : <FaPlay />}
                onClick={togglePlay}
                mr={2}
              />
              <IconButton aria-label="Next song" icon={<FaStepForward />} />
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;