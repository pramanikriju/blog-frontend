import React from "react";
import Link from "next/link";
import { Flex, Spacer, Box, Heading, Button } from "@chakra-ui/react";

const Nav = ({ categories }) => {
  return (
    <div>
      <nav>
        <Flex py="3">
          <Box p="2">
            <Link href="/">
              <Heading fontSize="3xl" size="md">
                Riju's Blog
              </Heading>
            </Link>
          </Box>
          <Spacer />
          <Box>
            {categories.map((category) => {
              return (
                <Link
                  as={`/category/${category.slug}`}
                  href="/category/[id]"
                  key={category.id}
                >
                  <Button colorScheme="cyan" mr="4" variant="outline">
                    {category.name}
                  </Button>
                </Link>
              );
            })}
          </Box>
        </Flex>
      </nav>
    </div>
  );
};

export default Nav;
