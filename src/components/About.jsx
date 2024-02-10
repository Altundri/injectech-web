import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { CameraIcon, DevicePhoneMobileIcon, GlobeAltIcon, PhotoIcon } from '@heroicons/react/24/outline';

export default function About() {
    return (
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-violet-600">
                  About Company
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Injectech Software House
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                Injectech adalah perusahaan IT Consultant yang didirikan pada tahun 2020 dan berkantor pusat di Palembang, Sumatera Selatan. Kami berspesialisasi dalam menyediakan 
                solusi dan layanan IT yang komprehensif untuk bisnis di berbagai industri, membantu mereka menavigasi landskap digital yang terus berkembang.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="../public/assets/bg-about.jpg"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <DevicePhoneMobileIcon
                      className="mt-1 h-5 w-5 flex-none text-violet-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                      Pengembangan Aplikasi Seluler
                      </strong>{" "}
                      <br />
                      Injectech memanfaatkan teknologi mutakhir untuk menciptakan aplikasi seluler yang inovatif 
                      dan ramah pengguna. Tim pengembang terampil kami berkomitmen untuk mengubah ide unik Anda 
                      menjadi solusi seluler yang fungsional dan menarik, memastikan bisnis Anda tetap terdepan 
                      di era mobile-first.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <GlobeAltIcon
                      className="mt-1 h-5 w-5 flex-none text-violet-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Pengembangan Situs Web
                      </strong>{" "}
                      <br />
                      Kami menciptakan pengalaman web yang berdampak dan meninggalkan kesan mendalam pada
                      audiens target Anda. Layanan pengembangan situs web kami mencakup segala hal mulai dari 
                      platform e-commerce hingga situs web yang kaya konten, dirancang untuk meningkatkan kehadiran 
                      online Anda dan mendorong pertumbuhan bisnis.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <PhotoIcon
                      className="mt-1 h-5 w-5 flex-none text-violet-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                      Desain UI/UX
                      </strong>{" "}
                      <br />
                      Antarmuka pengguna (UI) dan pengalaman pengguna (UX) adalah hal terpenting dalam 
                      lanskap digital saat ini. Perancang UI/UX Injectech ahli dalam menciptakan antarmuka 
                      yang intuitif dan menakjubkan secara visual, memastikan bahwa aplikasi dan situs web Anda 
                      menyenangkan secara estetika dan ramah pengguna.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CameraIcon
                      className="mt-1 h-5 w-5 flex-none text-violet-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                      Videografi Pemasaran Digital
                      </strong>{" "}
                      <br />
                      Di era pemasaran digital, konten video adalah rajanya. Layanan videografi 
                      kami dirancang untuk membantu bisnis menceritakan kisah mereka secara efektif 
                      melalui konten visual yang menawan. Baik itu video promosi, demo produk, atau penceritaan merek, 
                      kami memproduksi konten yang menarik dan mengonversi.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
