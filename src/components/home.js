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
                const totalOrders = [...currOrders, ...eventData];
                return totalOrders;
            });
        });
    }, []);

    return (
        <div>
           <DisplayGrid orders={orders} />
        </div>
    );
}

export default Home;