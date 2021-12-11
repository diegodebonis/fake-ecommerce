import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getProducts = async () => {
  const query = gql`
    query MyQuery {
      products(where: {}) {
        id
        name
        unit
        price
        image {
          url
        }
        category {
          name
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.products;
};

export const getCategories = async () => {
  const query = gql`
    query MyQuery {
      categories() {
        id,
        name
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.categories;
};
