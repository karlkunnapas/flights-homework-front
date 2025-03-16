import { useState } from "react";
import {createFileRoute} from '@tanstack/react-router'
import FlightCard from "../components/ui/FlightCard";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import SearchBar from "@/components/ui/SearchBar.tsx";

interface FlightType {
    startingPoint: string;
    destination: string;
    date: string;
    flightTime: number;
    price: number;
    freeSpots: number;
}


function Flights() {
    const [visibleFlights, setVisibleFlights] = useState(5);

    const loadMore = () => {
        setVisibleFlights((prev) => prev + 5); // Load 5 more flights
    };

    const {data: flights = [], isLoading } = useQuery<FlightType[]>({
        queryKey: ["flights"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:8080/flight/filter");
            return response.data;
        }
    });

    if (isLoading) {
        return <div>Loading flights...</div>;
    }

    return (
        <div className="flex flex-col items-center space-y-4 p-6 bg-gray-100 min-h-screen">
            <SearchBar></SearchBar>
            <div className="flex items-center p-2 gap-2 w-full max-w-3xl">
                Because of lack of time, it was hard coded to filter flights on current day flying from Tallinn to Barcelona.
                Although being useless for now, it also filters flights, which have flight time under 140 minutes with the
                price less than 300€.
            </div>
            {flights.slice(0, visibleFlights).map((flight, index) => (
                <FlightCard key={index} {...flight} />
            ))}

            {visibleFlights < flights.length && (
                <button
                    onClick={loadMore}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg mt-4"
                >
                    Show more
                </button>
            )}
        </div>
    );
}

export const Route = createFileRoute('/filter')({
    component: Flights,
})
