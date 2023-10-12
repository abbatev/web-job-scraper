import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import H2Heading from '../components/h2Heading';

const ScrapeForm = (props) => {
    const [error, setError] = useState('');
    const { listings, setListings } = props;
    const [url, setUrl] = useState('');

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (!url) {
            setError('Please enter a URL.');
            return;
        }

        setError('');

        axios
            .post('http://localhost:5001/api/listings', {
                url,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate('/');

                setListings([...listings, res.data]);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <H2Heading text="Create a scraper task" />
            {/* <Link to="/">View orders</Link> */}
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Add URL to scrape</label>
                    <br />
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    {error && <span style={{ color: 'red', marginLeft: '5px' }}>{error}</span>}
                </p>
                <input type="submit" value="Add URL to scrape" />
            </form>
        </div>
    );
};

export default ScrapeForm;
