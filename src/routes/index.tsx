import { useState } from "react";
import {createFileRoute} from '@tanstack/react-router'
import FlightCard from "../components/ui/FlightCard";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import {SearchBar} from "@/components/ui/SearchBar.tsx";

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
            const response = await axios.get("http://localhost:8080/flight");
            return response.data;
        }
    });

    if (isLoading) {
        return <div>Loading flights...</div>;
    }

    return (
        <div className="flex flex-col items-center space-y-4 p-6 bg-gray-100 min-h-screen">
            <SearchBar></SearchBar>
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

export const Route = createFileRoute('/')({
    component: Flights,
})
