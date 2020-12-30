import React from 'react';
import Colors from '../constant/colors';
import { Session } from "../utils/storage";

export default function Points ({ points }) {
    const player = Session.get("onlinePlayer");

    return (
        <span>
            <i className="fas fa-star" style={{ color: Colors.yellow }}></i> {points} ({player})
        </span>
        )

}