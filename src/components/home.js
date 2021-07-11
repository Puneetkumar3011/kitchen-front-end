import React, {useEffect, useState} from 'react';
import io from "socket.io-client";

import DisplayGrid from "./displayGrid";

const socket = io('http://localhost:4000', {
    transports: ['websocket', 'polling']
});

const Home = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        socket.on('order_event', (eventData) => {
            setOrders(currOrders => {
                return updateData(eventData);
            });
        });
    }, []);

    const updateData = (orderRequests) => {
        const result = orderRequests.reduce((acc, it) => (acc[it.id] = it, acc), {});
        return result;
    }

    return (
        <div>
           <DisplayGrid orders={orders} />
        </div>
    );
}

export default Home;