import React from "react";
import Link from "next/link";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Nav = ({ categories }) => {
  const { colorMode, toggleColorMode } = useColorMode();
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
          <Box my="auto">
            <Button onClick={toggleColorMode} mr="4">
              {colorMode === "light" ? "🌙" : "☀"}
            </Button>
            <Menu mr="2">
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Categories
              </MenuButton>
              <MenuList>
                {categories.map((category) => {
                  return (
                    <MenuItem key={category.id}>
                      <Link
                        as={`/category/${category.slug}`}
                        href="/category/[id]"
                        key={category.id}
                      >
                        {category.name}
                      </Link>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </nav>
    </div>
  );
};

export default Nav;
