import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                linkedin
                xing
                email
                github
              }
            }
            menu {
              label
              path
            }
            siteUrl
            title
            description
            copyright
          }
        }
      }
    `,
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
