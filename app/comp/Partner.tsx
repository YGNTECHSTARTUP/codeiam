import Image from "next/image"
import { Button } from "@/components/ui/button"
import { OurPartners } from "./Part"

export default function Partner() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto container">
      <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
        <div className="relative w-full h-[300px] lg:h-[400px]">
          <Image
            src="/thanks.png"
            alt="Partnership illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="space-y-4">
          <p className="text-sm font-medium tracking-wide uppercase">JOIN US</p>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
            Partner with Us and Drive Innovation Forward
          </h2>
          <p className="text-muted-foreground">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
            standard dummy text ever since the 1500s.
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
            CONTACT US
          </Button>
        </div>
      </div>
      <div className="">
        
        <OurPartners/>
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
         
        </div> */}
      </div>
    </section>
  )
}