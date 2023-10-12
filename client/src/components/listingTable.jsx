import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const ListingTable = (props) => {
    const { removeFromDom, listings, setListings } = props;


    useEffect(() => {
        axios
            .get("http://localhost:5001/api/listings")
            .then((res) => {
                console.log(res.data);
                setListings(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Details</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {listings.map((listing, index) => (
                        <tr key={index}>
                            <td>{listing.listingName}</td>
                            <td>{listing.description}</td>
                            <td>{listing.details}</td>
                            <td>{listing.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListingTable;
