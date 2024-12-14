import Link from 'next/link';

export default function Dashnav() {
    return (
        <div className="w-[77px] flex flex-col justify-center items-center h-[239px] mt-[210px] bg-[#ffffff] shadow-[0px_0px_25px_0px_#4446582E] rounded-bottom-right">


            <div className='shadow-2xl h-[272px] rounded-r-3xl flex flex-col justify-center items-center gap-5'>
                <div className="flex items-center">
                    <Link href="/dashboard" className="flex items-center text-gray-700 no-underline">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.33 13.33L9.33 13.33C10.06 13.33 10.66 12.73 10.66 12L10.66 1.33C10.66 0.59 10.06 0 9.33 0L1.33 0C0.6 0 0 0.59 0 1.33L0 12C0 12.73 0.6 13.33 1.33 13.33ZM1.33 24L9.33 24C10.06 24 10.66 23.4 10.66 22.66L10.66 17.33C10.66 16.6 10.06 16 9.33 16L1.33 16C0.6 16 0 16.6 0 17.33L0 22.66C0 23.4 0.6 24 1.33 24ZM14.66 24L22.66 24C23.39 24 24 23.4 24 22.66L24 12C24 11.26 23.39 10.66 22.66 10.66L14.66 10.66C13.93 10.66 13.33 11.26 13.33 12L13.33 22.66C13.33 23.4 13.93 24 14.66 24ZM13.33 1.33L13.33 6.66C13.33 7.4 13.93 8 14.66 8L22.66 8C23.39 8 24 7.4 24 6.66L24 1.33C24 0.59 23.39 0 22.66 0L14.66 0C13.93 0 13.33 0.59 13.33 1.33Z"
                                fill="#444658"
                            />
                        </svg>
                    </Link>
                </div>
                <div className="flex items-center">
                    <Link href="/dashboard/employee" className="flex items-center text-gray-700 no-underline">
                        <svg width="24.213135" height="24.000000" viewBox="0 0 24.2131 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Vector" d="M18.33 15.04C17.64 14.74 16.83 15 16.41 15.64L14.06 19.35C13.98 19.48 13.76 19.48 13.72 19.31L12.74 16.07C12.7 15.94 12.74 15.77 12.83 15.68L13.55 14.96C13.72 14.83 13.59 14.53 13.38 14.53L10.82 14.53C10.61 14.53 10.48 14.79 10.65 14.96L11.38 15.68C11.46 15.77 11.5 15.94 11.46 16.07L10.48 19.31C10.44 19.48 10.23 19.48 10.14 19.35L7.8 15.64C7.37 15 6.6 14.74 5.88 15.04C1.53 16.83 0 18.41 0 23.01C0 23.57 0.42 24 0.98 24L23.23 24C23.78 24 24.21 23.57 24.21 23.01C24.21 18.41 18.33 15.04 18.33 15.04ZM12.1 13.12C17.81 13.12 20.8 0.12 12.1 0C3.41 0.17 6.39 13.12 12.1 13.12Z" fill="#444658" fillOpacity="1.000000" fillRule="nonzero" />
                        </svg>
                    </Link>
                </div>
                <div className="flex items-center">
                    <Link href="/dashboard/company" className="flex items-center text-gray-700 no-underline">
                        <svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs>
                                <pattern id="pattern_12_2580" patternContentUnits="objectBoundingBox" width="1.000000" height="1.000000">
                                    <use xlinkHref="#image12_258_0" transform="matrix(0.001953,0,0,0.001953,0,0)" />
                                </pattern>
                                <image id="image12_258_0" width="512.000000" height="512.000000" xlinkHref="data:image/png;base64,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" />
                            </defs>
                            <mask id="mask12_258" mask-type="alpha" maskUnits="userSpaceOnUse" x="0.000000" y="0.000000" width="28.000000" height="28.000000">
                                <rect id="office-building 1" width="28.000000" height="28.000000" fill="url(#pattern_12_2580)" fillOpacity="1.000000" />
                            </mask>
                            <g mask="url(#mask12_258)">
                                <rect id="Rectangle 12" width="28.000000" height="28.000000" fill="#444658" fillOpacity="1.000000" />
                            </g>
                        </svg>
                    </Link>
                </div>
                <div className="flex items-center">
                    <Link href="/dashboard/assets" className="flex items-center text-gray-700 no-underline">
                        <svg width="26.666748" height="24.000000" viewBox="0 0 26.6667 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs>
                                <clipPath id="clip12_656">
                                    <rect id="Laptop Mobile" rx="0.000000" width="25.666668" height="23.000000" transform="translate(0.500000 0.500000)" fill="white" fillOpacity="0" />
                                </clipPath>
                            </defs>
                            <rect id="Laptop Mobile" rx="0.000000" width="25.666668" height="23.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fillOpacity="0" />
                            <g clipPath="url(#clip12_656)">
                                <path id="Vector" d="M23.73 8.03C24.43 8.03 25.1 8.31 25.6 8.81C26.09 9.3 26.37 9.97 26.37 10.67L26.37 21.23C26.37 21.94 26.09 22.61 25.6 23.1C25.1 23.6 24.43 23.87 23.73 23.87L18.45 23.87C17.75 23.87 17.08 23.6 16.58 23.1C16.09 22.61 15.81 21.94 15.81 21.23L15.81 10.67C15.81 9.97 16.09 9.3 16.58 8.81C17.08 8.31 17.75 8.03 18.45 8.03L23.73 8.03ZM13.17 10.67C13.17 9.28 13.73 7.93 14.72 6.94C15.71 5.95 17.05 5.4 18.45 5.39L23.73 5.39L23.73 2.75C23.73 2.05 23.45 1.38 22.96 0.89C22.46 0.39 21.79 0.11 21.09 0.11L5.25 0.11C4.55 0.11 3.88 0.39 3.38 0.89C2.89 1.38 2.61 2.05 2.61 2.75L2.61 13.31L13.17 13.31L13.17 10.67ZM2.61 18.59L13.17 18.59L13.17 15.95L-0.03 15.95C-0.03 16.66 0.25 17.33 0.74 17.82C1.24 18.32 1.91 18.59 2.61 18.59Z" fill="#444658" fillOpacity="1.000000" fillRule="evenodd" />
                            </g>
                        </svg>
                    </Link>
                </div>
                <div className="flex items-center">
                    <Link href="/dashboard/settings" className="flex items-center text-gray-700">
                        <svg width="24.004639" height="24.000000" viewBox="0 0 24.0046 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Vector" d="M22.53 9.59L21.38 9.59C21.07 9.59 20.71 9.31 20.59 8.97C20.48 8.66 20.35 8.36 20.21 8.06C20.05 7.75 20.11 7.29 20.33 7.07L21.15 6.25C21.72 5.68 21.72 4.74 21.15 4.17L19.82 2.85C19.55 2.57 19.18 2.41 18.78 2.41C18.39 2.41 18.02 2.56 17.74 2.85L16.92 3.67C16.79 3.8 16.57 3.88 16.34 3.88C16.19 3.88 16.05 3.85 15.94 3.79C15.64 3.64 15.33 3.52 15.02 3.4C14.69 3.29 14.41 2.92 14.41 2.61L14.41 1.46C14.41 0.66 13.75 0 12.93 0L11.06 0C10.25 0 9.59 0.66 9.59 1.46L9.59 2.61C9.59 2.92 9.31 3.29 8.98 3.4C8.67 3.51 8.36 3.64 8.06 3.78C7.95 3.84 7.81 3.87 7.66 3.87C7.43 3.87 7.21 3.79 7.07 3.66L6.26 2.85C5.98 2.57 5.61 2.41 5.22 2.41C4.82 2.41 4.45 2.57 4.18 2.85L2.85 4.18C2.57 4.45 2.41 4.82 2.41 5.22C2.41 5.61 2.57 5.98 2.85 6.25L3.67 7.07C3.89 7.29 3.94 7.75 3.79 8.06C3.65 8.36 3.52 8.67 3.41 8.98C3.29 9.31 2.93 9.59 2.62 9.59L1.47 9.59C0.66 9.59 0 10.25 0 11.06L0 12.94C0 13.75 0.66 14.4 1.46 14.4L2.61 14.4C2.92 14.4 3.29 14.68 3.4 15.02C3.51 15.33 3.64 15.63 3.79 15.93C3.94 16.25 3.88 16.7 3.66 16.92L2.84 17.74C2.27 18.31 2.27 19.25 2.84 19.82L4.17 21.15C4.45 21.43 4.82 21.58 5.21 21.58C5.61 21.58 5.97 21.43 6.25 21.15L7.07 20.33C7.21 20.2 7.43 20.12 7.66 20.12C7.81 20.12 7.95 20.15 8.06 20.21C8.36 20.35 8.67 20.48 8.98 20.59C9.31 20.7 9.59 21.07 9.59 21.38L9.59 22.53C9.59 23.34 10.25 24 11.06 24L12.93 24C13.75 24 14.41 23.33 14.41 22.53L14.41 21.38C14.41 21.07 14.69 20.7 15.02 20.59C15.33 20.48 15.64 20.35 15.94 20.21C16.05 20.15 16.19 20.12 16.34 20.12C16.57 20.12 16.79 20.2 16.92 20.33L17.74 21.15C18.02 21.43 18.39 21.58 18.78 21.58C19.18 21.58 19.54 21.43 19.82 21.15L21.15 19.82C21.72 19.25 21.72 18.31 21.15 17.74L20.33 16.92C20.11 16.7 20.06 16.25 20.21 15.94C20.36 15.64 20.48 15.33 20.59 15.02C20.71 14.69 21.07 14.41 21.38 14.41L22.53 14.41C23.34 14.41 24 13.75 24 12.94L24 11.06C24 10.25 23.34 9.59 22.53 9.59ZM12 16.31C9.62 16.31 7.69 14.37 7.69 12C7.69 9.63 9.62 7.69 12 7.69C14.37 7.69 16.31 9.62 16.31 12C16.31 14.37 14.37 16.31 12 16.31Z" fill="#444658" fillOpacity="1.000000" fillRule="nonzero" />
                        </svg>

                    </Link>
                </div>
            </div>
        </div>
    );
}
