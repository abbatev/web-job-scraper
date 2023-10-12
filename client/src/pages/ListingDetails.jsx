import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListingDetails = ({ match }) => {
    const [listing, setListing] = useState(null);
    const [isDescriptionEditing, setIsDescriptionEditing] = useState(false);
    const [isNotesEditing, setIsNotesEditing] = useState(false);
    const [updatedDescription, setUpdatedDescription] = useState('');
    const [updatedNotes, setUpdatedNotes] = useState('');

    useEffect(() => {
        const listingId = match.params.id; // Get the listing ID from the URL
        axios
            .get(`http://localhost:5001/api/listings/${listingId}`)
            .then((res) => {
                setListing(res.data);
                setUpdatedDescription(res.data.description);
                setUpdatedNotes(res.data.notes);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [match.params.id]);

    const handleUpdate = () => {
        // Send an HTTP request to update the description and notes on the server.
        // After successful update, set the edit mode to false.
        setIsDescriptionEditing(false);
        setIsNotesEditing(false);
    };

    const handleDelete = () => {
        // Implement your delete logic
    };

    if (!listing) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{listing.name}</h1>
            <p>
                Description: {isDescriptionEditing ? (
                    <input
                        type="text"
                        value={updatedDescription}
                        onChange={(e) => setUpdatedDescription(e.target.value)}
                    />
                ) : (
                    <span>{listing.description}</span>
                )}
            </p>
            <p>
                Notes: {isNotesEditing ? (
                    <input
                        type="text"
                        value={updatedNotes}
                        onChange={(e) => setUpdatedNotes(e.target.value)}
                    />
                ) : (
                    <span>{listing.notes}</span>
                )}
            </p>
            <p>Created Date: {listing.createdAt}</p>
            {/* "Edit" and "Delete" buttons */}
            {isDescriptionEditing || isNotesEditing ? (
                <button onClick={handleUpdate}>Save</button>
            ) : (
                <button onClick={() => setIsDescriptionEditing(true)}>Edit Description</button>
            )}
            <button onClick={() => setIsNotesEditing(true)}>Edit Notes</button>
            <button onClick={handleDelete}>Delete</button>
            {/* <Link to="/">Back to Home</Link> */}
        </div>
    );
};

export default ListingDetails;
