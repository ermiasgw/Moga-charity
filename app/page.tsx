import { getHero } from "@/sanity/sanity.query"
import type { HeroType } from "@/types/hero"
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30
export default async function Home() {

  
  const hero: HeroType[] = await getHero();

  return (
    <main className="flex flex-col items-center justify-between md:p-24 min-w-fit p-20 h-full" style={{backgroundImage: "url(/wall-1217083_1280-min.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      
      <h1 className="fixed top-5 left-10 text-2xl font-extrabold font-serif text-gray-600">Moga<span className=" text-sm text-white">charity</span></h1>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white w-3/5 text-center overflow-clip">{hero[0].welcomeMessage}</h1>
        <div className="relative w-32 h-32 mt-5 flex flex-col items-center justify-center">
          <Link href={"https://donate.stripe.com/test_4gw17g5S4gq34N2dQQ"}>
          
          <Image className="w-auto h-auto " src="/image 1.png" alt="background"
                        width={120} height={120}
                        quality={100}>
          </Image>
          <h1 className="absolute text-lg font-semibold w-full top-11 text-white -z-4 text-center">Donate</h1>
          </Link>
        </div>
        
      </div>
      
      <div className=" min-w-[200px] md:w-4/5 w-4/5  relative mt-10">
        <Image className="absolute md:-top-2 md:left-5 md:w-10 -top-1 left-5 w-5" src="/heart-157465 1.svg" alt="background"
                      width={100} height={100}
                      quality={100}>
        </Image>
        <Image className="absolute md:-top-2 md:right-5 md:w-10 -top-1 right-5 w-5" src="/heart-157465 1.svg" alt="background"
                      width={100} height={100}
                      quality={100}>
        </Image>
        <Image className=" w-full h-full" src={hero[0].heroImage.image} alt="background"
                      width={1920} height={1080}
                      quality={100}>
        </Image>
      </div>
      

    
    </main>
  )
}
