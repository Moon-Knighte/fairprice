import HeroCarousel from "@/components/HeroCarousel"
import Searchbar from "@/components/Searchbar"
import Image from "next/image"

const Home = () => {
  return (
    <>
    <section className="px-6 md:px-20 py-24">
      <div className="flex max-xl:flex-col gap-16">
        <div className="flex flex-col justify-center">
          <p className="small-text">
          Elevate your shopping experience: 
            <Image
            src="/assets/icons/arrow-right.svg"
            alt="arroe-right"
            width={16}
            height={16}
            />
            </p>
            <h1 className="head-text">
            Harness the potential of <span className="text-primary">
                FairPrice
              </span>
            </h1>
            <p className="mt-6">
            Empower your business with our powerful, self-serve product and growth analytics platform, designed to optimize conversion rates, enhance user engagement, and improve customer retention—ultimately driving your success in the competitive market landscape.            
            </p>
            <Searchbar/>
        </div>
        <HeroCarousel/>
      </div>
    </section>
    <section className="trending-section">
      <h2 className="section-text">Trending</h2>
<div className="flex flex-wrap gap-x-8 gap-y-16">
  {['Apple Iphone 15', 'Book', 'Sneakers', 'Smartphones'].map((product) => 
  ( <div>{product}</div>
  ))}
</div>
    </section>
    </>
  )
}

export default Home