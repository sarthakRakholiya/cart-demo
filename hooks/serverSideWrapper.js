import { fetchProductData } from "./dataFetchers";

export const withProductData = (getServerSidePropsFunc) => {
  return async (context) => {
    const product = await fetchProductData();
    const result = await getServerSidePropsFunc(context, product);
    return {
      props: {
        product,
        ...result.props,
      },
    };
  };
};