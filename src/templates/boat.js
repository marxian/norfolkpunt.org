import React from 'react'
import { Flex, Box } from 'grid-styled'
import Img from 'gatsby-image'

export default ({ data }) => {
    const { boat } = data
    return (
        <Flex>
            <Box w={1/2}>
                <h1>{boat.name}</h1>
                <p>Some text about the boat I guess</p>
            </Box>
            <Box w={1/2} px={1}>
                <Img
                    alt={boat.name}
                    sizes={boat.mugshot.sizes}
                />
            </Box>
        </Flex>
    )
}

export const query = graphql`
    query BoatDetailsQuery($slug: String!) {
        boat: boatsJson(fields: { slug: { eq: $slug } }) {
            name 
            mugshot {
                sizes(maxWidth: 600) {
                    ...GatsbyImageSharpSizes
                }
            }    
        }
    }
`;