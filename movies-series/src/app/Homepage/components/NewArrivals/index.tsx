import Image from "next/image";
import Marker from "../../../shared-components/Marker";
import Button from "../../../shared-components/Button";


export default function NewItem() {
    return (
        <section className="px-12 py-16  mr-30 ml-30">
            <Marker text="Featured" />
            <h2 className="text-3xl font-bold mb-8 mt-5">New Arrival</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative bg-black ">
                    <Image src="https://images.offerup.com/rblMyTFIz6A8xfH2cf35iBZxeKU=/249x249/e0ca/e0ca15fb62e2447d9ea2cbc16339811b.jpg" alt="PlayStation 5" width={1000}height={800} className="h-auto w-full"/>
                    <div className="absolute bottom-6 left-6 text-white">
                       <h3 className="font-bold text-4xl">PlayStation 5</h3>
                        <p className="text-lg mb-2">Black and White version of the PS5 coming out on sale.</p>
                        <Button buttonText="Shop Now" size="short" variant="noBg" onClickHandler={() => { }} className="text-sm font-light w-28 "/>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="relative col-span-2">
                        <Image src="https://i.pinimg.com/236x/e9/f0/16/e9f016bd5e21430ed367718be097f5db.jpg" alt="Women's Collection" width={250} height={250} className="rounded-lg w-full " style={{transform:"scaleX(-1)"}} />
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="font-bold text-4xl">Women &apos;s Collections</h3>
                            <p className="text-lg mb-2">Featured woman collections that give you another vibe.</p>
                             <Button buttonText="Shop Now" size="short" variant="noBg" onClickHandler={() => { }} className=" text-sm font-light w-28"/>
                        </div>
                    </div>
                     <div className="relative  bg-black">
                        <Image src="https://www.laptopsdirect.co.uk/Images/B06Y5ZW72J_6_LargeProductImage.jpg?width=650&height=650&v=3" alt="Speakers" width={250} height={250} className="rounded-lg object-cover w-full" />
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="font-bold text-4xl">Speakers</h3>
                            <p className="text-lg mb-2">Amazon wireless speakers</p>
                            <Button buttonText="Shop Now"size="short" variant="noBg" onClickHandler={() => { }} className=" text-sm font-light w-28" />
                        </div>
                     </div>
                    <div className="relative  bg-black">
                        <Image src="https://i.pinimg.com/736x/96/0d/4d/960d4dd75f8599479d940918103fae80.jpg" alt="Perfume" width={250} height={250} className="rounded-lg object-cover w-full"/>
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="font-bold text-4xl">Perfume</h3>
                            <p className="text-lg mb-2">GUCCI INTENSE OUD EDP</p>
                            <Button buttonText="Shop Now"size="short" variant="noBg" onClickHandler={() => { }}className=" text-sm font-light w-28"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}