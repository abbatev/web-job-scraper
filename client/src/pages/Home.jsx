import React, { useState } from 'react'
import ListingTable from '../components/listingTable';
import H1Heading from '../components/h1Heading';
import H2Heading from '../components/h2Heading';
import LinkButton from '../components/linkButton'; 

const Home = (props) => {

  const [listings, setListings] = useState([]);
  const removeFromDom = listingId => {
    setListings(listings.filter(listing=> listing._id !== listingId));
  };

  return (
    <div>
      <H1Heading text='Job listings' />
      {/* <LinkButton to="/listings" text="Create job listing" /> */}
      <H2Heading text='Recently scraped opportunities' />
      <ListingTable listings={listings} setListings={setListings} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Home;
