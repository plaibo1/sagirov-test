import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_KEY
  });

  const getHeaderData = async () => {
    try {
      const headerData = await client.getEntry(process.env.REACT_APP_CONTENTFUL_ENTRYID);

      return headerData.fields;
    } catch (error) {
      console.log(`Error fetching headerData ${error}`);
    }
  };

  const getCardsData = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "sagirovCards",
        select: "fields"
      });

      return entries.items;
    } catch (error) {
      console.log(`Error fetching getCardsData ${error}`);
    }
  };

  const getNavbarData = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "sagirovNavbar",
        select: "fields"
      });

      return entries.items;
    } catch (error) {
      console.log(`Error fetching getNavbarData ${error}`);
    }
  };

  return { getCardsData, getNavbarData, getHeaderData};
};

export default useContentful;