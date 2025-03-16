import React from "react";

interface FlightProps {
    startingPoint: string;
    destination: string;
    date: string;
    flightTime: number;
    price: number;
    freeSpots: number;
}

const FlightCard: React.FC<FlightProps> = ({
                                               startingPoint,
                                               destination,
                                               date,
                                               flightTime,
                                               price,
                                               freeSpots,
                                           }) => {
    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
        weekday: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        month: "short",
        year: "numeric",
    });

    const formattedTime = `${Math.floor(flightTime / 60)}h ${flightTime % 60}m`;

    return (
        <div className="flex justify-between items-center bg-white shadow-lg rounded-2xl p-4 border border-gray-200 w-full max-w-lg">
            <div>
                <h3 className="text-lg font-semibold">{startingPoint} → {destination}</h3>
                <p className="text-gray-500">{formattedDate}</p>
                <p className="text-gray-700">{formattedTime} flight time</p>
                <p className="text-purple-600 font-bold">€{price}</p>
            </div>
            <div className="flex flex-col items-end">
                <p className="text-sm text-gray-500">Free Spots: {freeSpots}</p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg">
                    Select
                </button>
            </div>
        </div>
    );
};

export default FlightCard;
