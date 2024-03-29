import React from "react"
import { withTheme } from "styled-components"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import ProductsListing from "../components/ProductsListing/productsListing"
import HomeSlider from "../components/HomeSlider"

const FlowerArrangements = props => {
  const data = useStaticQuery(graphql`
    query PageFlowerArrangementsData {
      flowerArrangementContent: wordpressPage(
        slug: { eq: "flowerarrangements" }
      ) {
        title
        content
      }

      shippingInfo: wordpressPage(slug: { eq: "shipping-info" }) {
        content
      }

      shopifyCollection(handle: { eq: "flower-arrangement" }) {
        title
        products {
          description
          title
          id
          handle
          vendor
          images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1500, maxHeight: 1500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          variants {
            id
            shopifyId
            title
            price
            weight
          }
        }
      }

      slider: allWordpressWpFlowerArrangement(
        sort: { fields: acf___order, order: ASC }
      ) {
        edges {
          node {
            id
            acf {
              photo {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1500, maxHeight: 600) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }

      mobileSlider: allWordpressWpFlowerArrangement(
        sort: { fields: acf___order, order: ASC }
      ) {
        edges {
          node {
            id
            acf {
              photo {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1500, maxHeight: 1000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  // --------------------- Final Render ---------------------- //

  return (
    <Layout>
      <SEO title="Events | Rooted in Culture" />
      <FloweArrangementsContainer>
        <div className="slider-container">
          <HomeSlider desktop={data.slider} mobile={data.mobileSlider} />
        </div>
        <div className="content-title-wrapper">
          <div className="flower-arrangement-title">
            <h2>{data.flowerArrangementContent.title}</h2>
          </div>
          <HeaderLine>
            <hr />
          </HeaderLine>
          <div
            className="content-wrapper"
            dangerouslySetInnerHTML={{
              __html: data.flowerArrangementContent.content,
            }}
          />
        </div>
        <div className="products-wrapper">
          <ProductsListing collection={data} parent={"arrangement"} />
        </div>
      </FloweArrangementsContainer>
    </Layout>
  )
}

// =============== Styled Components  ================= ///
const FloweArrangementsContainer = styled.div`
  display: grid;
  grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(
      8,
      [col-start] minmax(min-content, 13rem) [ col-end ]
    ) [center-end] minmax(4rem, 1fr) [ full-end ];
  @media ${props => props.theme.device.tablet} {
    margin-bottom: 8rem;
  }

  .slider-container {
    grid-column: full-start / full-end;
  }

  .content-title-wrapper {
    grid-column: center-start / center-end;
    width: 80%;
    margin: 8rem auto;
    @media ${props => props.theme.device.tablet} {
      grid-column: center-start / center-end;
      margin: 5rem 0;
      width: 100%;
    }

    .flower-arrangement-title {
      margin: 1rem auto;
      text-align: center;

      @media ${props => props.theme.device.tablet} {
        width: 100%;
      }
    }

    .content-wrapper {
      margin: 0 auto;

      @media ${props => props.theme.device.tablet} {
        width: 100%;
        margin-bottom: 3rem;
      }
    }

    .shipping-info {
      line-height: 2;
      margin-top: 8rem;

      hr {
        margin: 2rem auto;
        width: 30%;
        border: 0;
        height: 1px;
        background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.75),
          rgba(0, 0, 0, 0)
        );
      }
    }
  }

  .products-wrapper {
    grid-column: full-start / full-end;
    display: grid;
    grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(
        8,
        [col-start] minmax(min-content, 13rem) [ col-end ]
      ) [center-end] minmax(4rem, 1fr) [ full-end ];
    @media ${props => props.theme.device.tablet} {
      grid-column: center-start / center-end;
    }
  }
`

const HeaderLine = styled.div`
  width: 25rem;
  margin: 1rem auto 6rem auto;

  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0)
    );
  }
`

export default withTheme(FlowerArrangements)
