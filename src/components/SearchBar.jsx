import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        if (searchQuery) {
            navigate(`/search/${searchQuery}`)

            setSearchQuery("")
        }
    }

    return (
        <Paper
            component='form'
            onSubmit={handleSearchSubmit}
            sx={{
            backgroundColor: "#0f0f0f",
            boxShadow: "none",
            }}
        >
            <input
            className="search-bar"
            placeholder="Search"
            value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <IconButton type='submit' sx={{ p: '10px', color: 'white' }} aria-label='search'>
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBar