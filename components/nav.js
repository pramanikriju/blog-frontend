import React from "react";
import Link from "next/link";
import { Flex, Spacer, Box, Divider, Heading, Button } from "@chakra-ui/react";

const Nav = ({ categories }) => {
  return (
    <div>
      {/* <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li></li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link as={`/category/${category.slug}`} href="/category/[id]">
                    <a className="uk-link-reset">{category.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav> */}
      <nav>
        <Flex>
          <Box p="2">
            <Heading size="md">Riju's Blog</Heading>
          </Box>
          <Spacer />
          <Box>
            {categories.map((category) => {
              return (
                <>
                  <Link as={`/category/${category.slug}`} href="/category/[id]">
                    <Button colorScheme="cyan" mr="4" variant="ghost">
                      {category.name}
                    </Button>
                  </Link>
                </>
              );
            })}
          </Box>
        </Flex>
      </nav>
    </div>
  );
};

export default Nav;
