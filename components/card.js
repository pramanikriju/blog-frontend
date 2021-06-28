// import React from "react";
// import Link from "next/link";
// import Image from "./image";

// const Card = ({ article }) => {
//   return (
//     <Link as={`/article/${article.slug}`} href="/article/[id]">
//       <a className="uk-link-reset">
//         <div className="uk-card uk-card-muted">
//           <div className="uk-card-media-top">
//             <Image image={article.image} />
//           </div>
//           <div className="uk-card-body">
//             <p id="category" className="uk-text-uppercase">
//               {article.category.name}
//             </p>
//             <p id="title" className="uk-text-large">
//               {article.title}
//             </p>
//           </div>
//         </div>
//       </a>
//     </Link>
//   );
// };

// export default Card;

//import Image from "next/image";
import Image from "./image";
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

export default function Card({ article }) {
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
            <Image image={article.image} layout={"fill"} />
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
            <Avatar src={article.author.picture} alt={"Author"} />
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
