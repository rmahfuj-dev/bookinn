import React, { useState } from "react";
import Container from "../../../components/Container";
import { GoPeople } from "react-icons/go";
import { DatePicker } from "@/components/DatePicker";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchMenu = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="py-10">
      <Container>
        <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Explore Beautiful Places in Bangladesh
            </h2>
            <p className="text-gray-500 mt-1">
              Discover the best hotels and destinations across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Location */}
            <div className="border rounded-xl p-4">
              <p className="text-xs font-medium text-gray-500 mb-2">Location</p>

              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="border-0 shadow-none px-0 focus:ring-0">
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="dhaka">Dhaka</SelectItem>
                  <SelectItem value="chattagram">Chattagram</SelectItem>
                  <SelectItem value="rajshahi">Rajshahi</SelectItem>
                  <SelectItem value="sylhet">Sylhet</SelectItem>
                  <SelectItem value="khulna">Khulna</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Check In */}
            <div className="border rounded-xl p-4">
              <p className="text-xs font-medium text-gray-500 mb-2">Check In</p>

              <DatePicker />
            </div>

            {/* Check Out */}
            <div className="border rounded-xl p-4">
              <p className="text-xs font-medium text-gray-500 mb-2">
                Check Out
              </p>

              <DatePicker />
            </div>

            {/* Guests */}
            <div className="border rounded-xl p-4 flex items-center gap-3">
              <GoPeople className="text-xl text-gray-500" />

              <div>
                <p className="text-xs font-medium text-gray-500">Guests</p>
                <p className="text-sm text-gray-800">Add Guests</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              className="
                px-8
                py-3
                rounded-xl
                bg-black
                text-white
                font-medium
                hover:opacity-90
                transition
              "
            >
              Search Hotels
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchMenu;
