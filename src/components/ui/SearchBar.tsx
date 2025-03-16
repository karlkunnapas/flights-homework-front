import { useState } from "react";
import Layout from "@/components/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SearchBar() {
    const [departure, setDeparture] = useState("From");
    const [destination, setDestination] = useState("To");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [passengers, setPassengers] = useState(1);

    return (
        <Layout>
            <div
                className="flex items-center bg-white shadow-lg rounded-full p-2 gap-2 w-full max-w-3xl mx-auto border border-gray-300">
                {/* Departure input box */}
                <div className="relative">
                    <input
                        type="text"
                        className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full cursor-pointer w-40"
                        value={departure}
                        readOnly
                        onClick={() => setDeparture(prompt("Enter Departure City") || departure)}
                    />
                </div>

                {/* Swap input boxes */}
                <button
                    className="text-gray-500 text-xl"
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
                        value={destination}
                        readOnly
                        onClick={() => setDestination(prompt("Enter Destination City") || destination)}
                    />
                </div>

                {/* Date Picker */}
                <div className="text-gray-700 px-4 border-l border-gray-300">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date!)}
                        className="cursor-pointer w-20 text-center"
                    />
                    -
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date!)}
                        className="cursor-pointer w-20 text-center"
                    />
                </div>

                {/* Number of passengers */}
                <div
                    className="text-gray-700 px-4 border-l border-gray-300 cursor-pointer"
                    onClick={() => {
                        let p = prompt("Enter number of passengers:", passengers.toString());
                        setPassengers(p ? parseInt(p) : passengers);
                    }}
                >
                    {passengers} adult
                </div>

                {/* Search Button */}
                <button
                    className="bg-purple-700 text-white rounded-full p-3 hover:bg-purple-800"
                    onClick={() => alert(`Searching flights from ${departure} to ${destination} on ${startDate.toDateString()} - ${endDate.toDateString()} for ${passengers} passenger(s).`)}
                >
                    Search
                </button>
            </div>
        </Layout>
    )
}

export default SearchBar;