import CardService from "./CardService";

export default function Service() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-2xl font-semibold leading-7 text-indigo-600">Service</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Layanan kami yang akan menjadi solusi bagi masalah anda
                    </p>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-24">
                    <CardService
                    title="Mobile App"
                    text="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                    image="../src/assets/user-interface.png"
                    />
                    <CardService
                    title="Website"
                    text="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                    image="../src/assets/web-interface.png"
                    />
                    <CardService
                    title="Videography"
                    text="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                    image="../src/assets/videography.png"
                    />
                    <CardService
                    title="UI/UX Designer"
                    text="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                    image="../src/assets/programming.png"
                    />
                </div>
            </div>
        </div>
    )
}
