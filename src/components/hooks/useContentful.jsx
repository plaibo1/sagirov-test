import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "xz7e8qci9me3",
    accessToken: "gDkEA_GXoiOhq55hCnLviNVR4xn8tTB2EmCzGhQZF9w"
  });

  const getHeaderData = async () => {
    try {
      const headerData = await client.getEntry('10maIzCdW9yOpkwiNLE3JR');

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