import { useState } from "react";
import Layout from "@/components/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function SearchBar() {
    const [departure, setDeparture] = useState("");
    const [destination, setDestination] = useState("");
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
    const [passengers, setPassengers] = useState(1);
    const [startDate, endDate] = dateRange;

    return (
        <Layout>
            <div className="flex items-center bg-white shadow-lg rounded-full p-2 gap-2 w-full max-w-5xl mx-auto border border-gray-300">
                {/* Departure input box */}
                <div className="relative">
                    <input
                        type="text"
                        className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full cursor-pointer w-40"
                        placeholder={"From"}
                        value={departure}
                        onChange={(e) => setDeparture(e.target.value)}
                    />
                </div>

                {/* Swap input boxes */}
                <button
                    className="text-gray-500 text-xl cursor-pointer"
                    onClick={() => {
                        let temp = departure;
                        setDeparture(destination);
                        setDestination(temp);
                    }}
                >
                    ↔
                </button>

                {/* Destination input box */}
                <div className="relative">
                    <input
                        type="text"
                        className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full cursor-pointer w-40"
                        placeholder={"To"}
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>

                {/* Date Range Picker */}
                <DatePicker
                    selectsRange
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => setDateRange(update)}
                    placeholderText="Select date range"
                    dateFormat="dd/MM/yyyy"
                    className="cursor-pointer w-55 text-center border border-gray-300 p-2 rounded-md bg-gray-100"
                    calendarClassName="bg-white rounded-lg p-4 shadow-lg"
                    popperPlacement="bottom-start"
                />


                {/* Number of passengers */}
                <div className="w-full max-w-sm min-w-[225px]">
                    <div className="relative">
                        <input type="number"
                               className="w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                               placeholder="Number of passengers"
                               min={1}
                               onChange={(e) => setPassengers(parseInt( e.target.value))}
                        />

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="absolute w-5 h-5 top-2.5 right-2.5 text-slate-600">
                            <path
                                d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
                        </svg>
                    </div>
                </div>

                {/* Search Button */}
                <button
                    className="w-full max-w-sm min-w-[20px] bg-purple-700 text-white rounded-full p-3 hover:bg-purple-800 cursor-pointer"
                    onClick={() =>
                        alert(
                            `Searching flights from ${departure} to ${destination} on ${
                                startDate?.toDateString() || "?"
                            } - ${endDate?.toDateString() || "?"} for ${passengers} passenger(s).`
                        )
                    }
                >
                    Search
                </button>
            </div>
        </Layout>
    );
}
