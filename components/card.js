import ImageComponent from "./image";
import Link from "next/link";
import Moment from "react-moment";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { getStrapiMedia } from "../lib/media";

export default function Card({ article }) {
  const authorImgUrl =
    article.author.picture !== undefined
      ? getStrapiMedia(article.author.picture)
      : false;
  return (
    <Box py={6}>
      <Link as={`/article/${article.slug}`} href="/article/[id]">
        <Box
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Box
            h={"210px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <ImageComponent image={article.image} layout={"fill"} />
          </Box>
          <Stack>
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              {article.category.name}
            </Text>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {article.title}
            </Heading>
            <Text color={"gray.500"}>{article.description}</Text>
          </Stack>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            <Box>
              <Avatar
                name={article.author.name}
                src={authorImgUrl}
                alt={article.author.name}
              />
            </Box>

            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>{article.author.name}</Text>
              <Text color={"gray.500"}>
                <Moment format="MMM Do YYYY">{article.published_at}</Moment> ·
                6min read
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Link>
    </Box>
  );
}
