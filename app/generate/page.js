"use client";

import Link from "next/link";
import React, { useState } from "react";

const generate = () => {
    const [url, seturl] = useState("");
    const [shortURL, setShortURL] = useState("");
    const [generated, setGenerated] = useState("");

    const generateUrl = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shortUrl": shortURL
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                alert(result.message)
                seturl("")
                setShortURL("")
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortURL}`)
            })
            .catch((error) => console.error(error));
    }


    return (
        <div className="mx-auto max-w-lg my-16 p-8 glass rounded-lg flex flex-col gap-4">
            <h1 className="font-bold text-xl">Shorten your URLs!</h1>
            <div className="flex flex-col gap-4">
                <input
                    className="p-4 focus:outline-none rounded-md"
                    type="text"
                    placeholder="Enter your URL"
                    value={url}
                    onChange={(e) => seturl(e.target.value)}
                />

                <input
                    className="p-4 focus:outline-none rounded-md"
                    type="text"
                    placeholder="Enter your preferred short URL"
                    value={shortURL}
                    onChange={(e) => setShortURL(e.target.value)}
                />
                <div className="bg-gradient-to-r from-teal-100 to-pink-200 w-full">

                    <button
                        onClick={generateUrl}
                        className=" glass5 w-full rounded-md py-1">Generate</button>
                </div>
            </div>
            {generated && <>
                <span className="font-bold text-lg">Your Links</span>
                <code>
                    <Link target="_blank" href={generated}>{generated}</Link>
                </code>
            </>}
        </div>
    );
};

export default generate;
