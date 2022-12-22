import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ShowCase from '../sections/ShowCase'
import UnderShowCase from '../sections/UnderShowCase'
import ProductGridSection from '../sections/ProductGridSection'
import TopPicks from '../sections/TopPicks'
import CategoryRightSection from '../sections/CategoryRightSection'
import CategoryLeftSection from '../sections/CategoryLeftSection'
import CompanyServiceSection from '../sections/CompanyServiceSection'
import CustomerService from "../assets/images/customer-service-icon.svg";
import CustomerSecurePayment from "../assets/images/secured-payment-icon.svg";
import CustomerDelivery from "../assets/images/delivery-truck-icon.svg";
import { FeaturedProductsContext, TopProductsContext, LeftProductsContext } from '../context/contexts'



const HomeView = () => {
  document.title = "fixxo."
  
  const products = useContext(FeaturedProductsContext) 
  const topProducts = useContext(TopProductsContext) 
  const leftProducts = useContext(LeftProductsContext)

  return (
    <>
      <MainMenuSection />
      <ShowCase />
      <UnderShowCase/>
      <ProductGridSection  title="Featured Products" product={products}/>
      <TopPicks/>
       <CategoryRightSection  product={topProducts}/>
      <CategoryLeftSection   product={leftProducts}/> 
      <div className='service-contacts container' >
      <CompanyServiceSection companyicon={CustomerService} servicetitle={"Customer Support"} serviceinfo={"Village did removed enjoyed explain talking."}/>
      <CompanyServiceSection companyicon={CustomerSecurePayment} servicetitle={"Customer Support"} serviceinfo={"Village did removed enjoyed explain talking."}/>
      <CompanyServiceSection companyicon={CustomerDelivery} servicetitle={"Customer Support"} serviceinfo={"Village did removed enjoyed explain talking."}/>
      <CompanyServiceSection companyicon={CustomerDelivery} servicetitle={"Customer Support"} serviceinfo={"Village did removed enjoyed explain talking."}/>
      </div>
      <FooterSection />
    </>
  )
}

export default HomeView