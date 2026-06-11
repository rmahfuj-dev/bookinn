import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import { FiMenu, FiX, FiBell } from "react-icons/fi";
import { NavLink } from "react-router";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Destinations", href: "/destinations", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed top-0 z-50 bg-white shadow-sm w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-black">
              <span className="sr-only">Open menu</span>

              <FiMenu className="block text-xl group-data-open:hidden" />
              <FiX className="hidden text-xl group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Logo + Nav */}
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <div className="text-xl font-black tracking-[0.2em] text-black">
              TRAVELINN
            </div>

            <div className="hidden sm:ml-8 sm:flex sm:space-x-6">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Notification */}
            <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-black">
              <FiBell className="text-xl" />
            </button>

            {/* Profile */}
            <Menu as="div" className="relative">
              <MenuButton className="flex rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="h-8 w-8 rounded-full"
                />
              </MenuButton>

              <MenuItems className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                <MenuItem>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden bg-white border-t">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-black"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
} 
// everything is okey here , just make the navlinks colors white