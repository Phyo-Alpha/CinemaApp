import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function page() {
    return (
        <section className="flex justify-start w-full h-screen bg-homeBackgroundImg bg-cover">
            <div className="homePage-hero">
                <div className="mx-28 mt-32">
                    <h1 className="text-6xl font-bold tracking-widest">CINEMA</h1>
                    <p className="text-gold text-2xl tracking-wider pl-0.5 mt-5">
                        Stream now newest movies <br /> and TV series
                    </p>
                    <Button className="blue-btn mt-8">
                        Sign Up Now
                    </Button>
                </div>
            </div>


        </section>
    )
}
