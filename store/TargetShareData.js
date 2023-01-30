import React from "react";
import axios from "axios";

const URL = "https://bobsport33.pythonanywhere.com";

export default async function TargetShareData(year, week = null) {
    let slug;
    if (year === null) {
        return <p>Invalid Request, please select a different season or year</p>;
    }
    if (week === null) {
        console.log(year);
        slug = `/top40season/${year}`;
    } else {
        console.log(year);
        console.log(week);
        slug = `/top40week/${year}/${week}`;
        console.log(slug);
    }

    const response = await axios.get(URL + slug);
    const stringifyResponse = JSON.stringify(response);

    const data = JSON.parse(stringifyResponse);
    console.log(data.data);
    return data.data;
}
