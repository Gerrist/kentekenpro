import type {MetaFunction} from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export default function Index() {
    return (
        <>
            <nav className="fixed left-0 right-0 top-0 z-40 flex select-none flex-col items-center text-xl backdrop-blur-xl">
                <div className="flex w-full justify-between p-4 py-6 md:w-[48rem]">
                    <div>KentekenPro</div>
                    <label htmlFor="menu-trigger" className="cursor-pointer text-black md:hidden">Menu</label>
                    <input type="checkbox" className="peer/menu hidden" id="menu-trigger"/>
                    <div
                        className="fixed md:relative inset-0 hidden h-screen md:h-auto flex-col items-center bg-black md:bg-transparent text-white peer-checked/menu:flex md:flex">
                        <div className="flex w-full flex-col justify-between md:w-[48rem] md:hidden">
                            <div className="z-20 flex justify-between p-4 py-6 text-xl">
                                <div className="text-white">KentekenPro</div>
                                <label htmlFor="menu-trigger" className="cursor-pointer text-white">Sluiten</label>
                            </div>
                        </div>
                        <div className="flex w-full flex-col justify-between p-4 md:w-[48rem] md:p-0 md:w-fit">
                            <ul className="flex flex-col md:flex-none md:flex-row gap-6 text-3xl md:text-xl font-light md:text-black">
                                <li className="cursor-pointer">
                                    <a href="#">Home</a>
                                </li>
                                <li className="cursor-pointer">
                                    <a href="#">Zoeken</a>
                                </li>
                                <li className="cursor-pointer">
                                    <a href="#">Laatste kentekens</a>
                                </li>
                                <li className="cursor-pointer">
                                    <a href="#">Over</a>
                                </li>
                                <li className="cursor-pointer">
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex h-screen flex-col items-center justify-center bg-tint">
                <div className="w-full p-4 font-medium md:w-[48rem]">
                    <div className="text-7xl uppercase md:text-[8rem]">Brand Model</div>
                    <div className="text-2xl md:text-[4rem]">2022</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                    <div className="p-4 font-medium flex md:w-[48rem] gap-2 overflow-x-scroll">
                        <div
                            className="cursor-pointer rounded-full border-[1px] border-black p-4 px-5 transition-colors hover:bg-black hover:text-tint">Belangrijk
                        </div>
                        <div
                            className="cursor-pointer rounded-full border-[1px] border-black p-4 px-5 transition-colors hover:bg-black hover:text-tint">Historie
                        </div>
                        <div
                            className="cursor-pointer rounded-full border-[1px] border-black p-4 px-5 transition-colors hover:bg-black hover:text-tint">APK
                        </div>
                        <div
                            className="cursor-pointer rounded-full border-[1px] border-black p-4 px-5 transition-colors hover:bg-black hover:text-tint">Aandrijving
                        </div>
                        <div
                            className="cursor-pointer rounded-full border-[1px] border-black p-4 px-5 transition-colors hover:bg-black hover:text-tint">Specificaties
                        </div>
                    </div>
                </div>
            </div>
            <main>
                <section className="flex flex-col items-center bg-black text-white">
                    <div className="flex flex-col gap-8 p-4 py-12 w-full md:w-[48rem]">
                        <h2 className="text-5xl">Samenvatting</h2>
                        <div className="flex flex-col gap-4">
                            <p>
                                Deze Toyota Yaris is een origineel nederlandse personenauto staat sinds 30 Januari 2022
                                op kenteken.
                                Dit voertuig is 2 keer gekeurd en heeft daarbij geen adviespunten gekregen en is niet
                                afgekeurd. Ook
                                heeft dit voertuig geen opvallende bijzonderheden.
                            </p>
                            <p>
                                Deze Toyota Yaris is een origineel nederlandse personenauto staat sinds 30 Januari 2022
                                op kenteken.
                                Dit voertuig is 2 keer gekeurd en heeft daarbij geen adviespunten gekregen en is niet
                                afgekeurd. Ook
                                heeft dit voertuig geen opvallende bijzonderheden.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col items-center">
                    <div className="grid grid-cols-[1fr,1fr] gap-8 p-4 py-12 w-full md:w-[48rem]">
                        <h2 className="text-5xl">Samenvatting van dit voertuig</h2>
                        <div className="flex flex-col gap-4">
                            <p>
                                Deze Toyota Yaris is een origineel nederlandse personenauto staat sinds 30 Januari 2022
                                op kenteken.
                                Dit voertuig is 2 keer gekeurd en heeft daarbij geen adviespunten gekregen en is niet
                                afgekeurd. Ook
                                heeft dit voertuig geen opvallende bijzonderheden.
                            </p>
                            <p>
                                Deze Toyota Yaris is een origineel nederlandse personenauto staat sinds 30 Januari 2022
                                op kenteken.
                                Dit voertuig is 2 keer gekeurd en heeft daarbij geen adviespunten gekregen en is niet
                                afgekeurd. Ook
                                heeft dit voertuig geen opvallende bijzonderheden.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col items-center bg-slate-100">
                    <div className="grid grid-cols-[auto,1fr] gap-8 p-4 py-12 w-full md:w-[48rem]">
                        <div
                            className="bg-white aspect-square grid place-items-center rounded-full min-w-24 text-2xl p-4">
                            12
                        </div>
                        <div className="flex flex-col gap-4">
                            <p>
                                Deze Toyota Yaris is een origineel nederlandse personenauto staat sinds 30 Januari 2022
                                op kenteken.
                                Dit voertuig is 2 keer gekeurd en heeft daarbij geen adviespunten gekregen en is niet
                                afgekeurd. Ook
                                heeft dit voertuig geen opvallende bijzonderheden.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col items-center">
                    <div className="grid grid grid-cols-[1fr,1fr] gap-8 p-4 py-12 w-full md:w-[48rem]">
                        <h2 className="text-5xl">Samenvatting van dit voertuig</h2>
                        <div className="flex flex-col gap-4">
                            <p>
                                Deze Toyota Yaris is een origineel nederlandse personenauto staat sinds 30 Januari 2022
                                op kenteken.
                                Dit voertuig is 2 keer gekeurd en heeft daarbij geen adviespunten gekregen en is niet
                                afgekeurd. Ook
                                heeft dit voertuig geen opvallende bijzonderheden.
                            </p>
                            <p>
                                Deze Toyota Yaris is een origineel nederlandse personenauto staat sinds 30 Januari 2022
                                op kenteken.
                                Dit voertuig is 2 keer gekeurd en heeft daarbij geen adviespunten gekregen en is niet
                                afgekeurd. Ook
                                heeft dit voertuig geen opvallende bijzonderheden.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
