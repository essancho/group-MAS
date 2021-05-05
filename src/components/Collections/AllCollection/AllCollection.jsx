import React, { useContext, useEffect, useState } from "react";
import algoliasearch from 'algoliasearch/lite';
import { productsContext } from "../../../contexts/ProductContext";
import MenCard from "../MenAllProducts/MenCard";
import WomenCover from "../WomenCollection/WomenCover";
import { SearchBox, InstantSearch, Hits, Pagination, RefinementList,
    Configure, ClearRefinements, Stats, SortBy } from "react-instantsearch-dom";
import "./AllCollection.css";
import PropTypes from 'prop-types';
const client = algoliasearch(
    "OVRPEM94W9",
    "6ed17ccfeec595ce7d9cd385bdf9d8af"
)

const AllCollection = () => {
    let category = "All Collection";
    const [type, setType] = useState("");
    const [gender, setGender] = useState("");
    const { allProducts, getCollection } = useContext(productsContext);
    const [itemLimit, setItemLimit] = useState(6);
    const [loading, setLoading] = useState(false);
    
    function Hit(props) {
        return (
          <div>
            <MenCard category={props.hit.category} item={props.hit}/>
          </div>
        );
      }
    return (
        <>
        
        <WomenCover category={category}/>
        <div>
        <InstantSearch searchClient={client} indexName="products">
            <SearchBox />
            
            <Configure hitsPerPage={6} />
          
            <div className="hits-container">
                <Pagination /> 
                <Hits hitComponent={Hit} />
            </div> 
             
        </InstantSearch>    

        </div>
        </>
    );
};

export default AllCollection;
