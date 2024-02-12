import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

export default function Content() {
    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
            <div className="relative px-6 pt-14 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-90" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#847bfe] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",}}/>
                </div>
                <div className="mx-auto max-w-2xl mt-40">
                    <div className="space-x-15 md:space-x-14 sm:space-x-2">
                        <h2 className="text-2xl ml-15 md:ml-14 sm:ml-2 font-bold text-yellow-500 ">Layanan Unggulan</h2>
                        <h1 className="text-2xl ml-15 md:ml-14 sm:ml-2 mt-4 font-bold text-gray-900 sm:text-4xl">Jasa Pembuatan Aplikasi</h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">Aplikasi ERP bisnis yang kami produksi selalu berdasarkan kepada alur bisnis yang sudah dilakukan di perusahaan anda. Proses transformasi digital dari sistem manual ke sistem digital akan semakin mengoptimalkan kinerja dari perusahaan anda.</p>
                        <div className="mt-10 flex items-center"> <a href="#" className="rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 flex items-center"> <span>Diskusi via Whatsapp yuk</span> <ChatBubbleLeftEllipsisIcon className="w-4 h-4 ml-2" /> </a> </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#847bfe] to-[#847bfe] opacity-30 sm:left-[calc(50%+30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)", }} />
                </div>
            </div>
            <div className="relative px-5 pt-14">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true" >
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#847bfe] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)", }} />
                </div>
                <img className="justify-start text-center mt-11" src="./assets/programming.png" alt="" />
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true" >
                    <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#847bfe] to-[#847bfe] opacity-30 sm:left-[calc(50%+30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)", }}/>
                </div>
            </div>
        </div>
    );
}
