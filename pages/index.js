"use client"; // Marks this as a Client Component

import { useState, useEffect } from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Property from "../components/Property";
import { fetchApi, baseUrl } from "../utils/fetchApi";

// Banner Component
const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home() {
  const [propertiesForRent, setPropertiesForRent] = useState([]);
  const [propertiesForSale, setPropertiesForSale] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const rentData = await fetchApi(
          `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
        );
        const saleData = await fetchApi(
          `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
        );

        setPropertiesForRent(rentData?.hits || []);
        setPropertiesForSale(saleData?.hits || []);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />

      {loading ? (
        <Text textAlign="center" fontSize="xl" mt="5">
          Loading properties...
        </Text>
      ) : (
        <Flex flexWrap="wrap">
          {propertiesForRent.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
      )}

      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />

      {loading ? (
        <Text textAlign="center" fontSize="xl" mt="5">
          Loading properties...
        </Text>
      ) : (
        <Flex flexWrap="wrap">
          {propertiesForSale.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
      )}
    </Box>
  );
}
