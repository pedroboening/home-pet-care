"use client"

import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Image from 'next/image';

const Header = () => {

    const preventHover = (event) => {
        const e = event
        if (window.innerWidth < 1024) e.preventDefault()
    }

    return (
        <header className="absolute inset-x-0 top-0 z-50 bg-white sticky">
            <NavigationMenu.Root>
                <NavigationMenu.List className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <NavigationMenu.Item className="flex lg:flex-1">
                        <NavigationMenu.Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image className="h-8 w-auto" src="next.svg" alt="" width={10} height={10} />
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item className="flex lg:hidden">
                        <NavigationMenu.Trigger type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onPointerMove={preventHover} onPointerLeave={preventHover}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content>
                            <div className="lg:hidden" role="dialog" aria-modal="true">
                                <div className="fixed inset-0 z-50"></div>
                                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                    <div className="flex items-center justify-between">
                                        <NavigationMenu.Link href="/" className="-m-1.5 p-1.5">
                                            <span className="sr-only">Your Company</span>
                                            <Image className="h-8 w-auto" src="next.svg" alt="" width={10} height={10} />
                                        </NavigationMenu.Link>
                                        <NavigationMenu.Link type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                            <span className="sr-only">Close menu</span>
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </NavigationMenu.Link>
                                    </div>
                                    <div className="mt-6 flow-root">
                                        <div className="-my-6 divide-y divide-gray-500/10">
                                            <div className="space-y-2 py-6">
                                                <NavigationMenu.Link href="/products" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                    Product
                                                </NavigationMenu.Link>
                                                <NavigationMenu.Link href="/features" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                    Features
                                                </NavigationMenu.Link>
                                                <NavigationMenu.Link href="/marketplace" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                    Marketplace
                                                </NavigationMenu.Link>
                                                <NavigationMenu.Link href="/company" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                    Company
                                                </NavigationMenu.Link>
                                            </div>
                                            <div className="py-6">
                                                <NavigationMenu.Link href="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                    Log in
                                                </NavigationMenu.Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <NavigationMenu.Item>
                            <NavigationMenu.Link href="/products" className="text-sm font-semibold leading-6 text-gray-900">Product</NavigationMenu.Link>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                            <NavigationMenu.Link href="/features" className="text-sm font-semibold leading-6 text-gray-900">Features</NavigationMenu.Link>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                            <NavigationMenu.Link href="/marketplace" className="text-sm font-semibold leading-6 text-gray-900">
                                Marketplace
                            </NavigationMenu.Link>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                            <NavigationMenu.Link href="/company" className="text-sm font-semibold leading-6 text-gray-900">
                                Company
                            </NavigationMenu.Link>
                        </NavigationMenu.Item>
                    </div>
                    <NavigationMenu.Item className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>

        </header>
    );
};

export default Header;
