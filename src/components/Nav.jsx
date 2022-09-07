import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { Typography } from '@mui/material';

const Nav = () => {
  return (
    <Stack zIndex={10} direction="row" alignItems="center" p={2} sx={{ position: "sticky", top: 0, background: "#0f0f0f", justifyContent: "space-between"}}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div className="app-logo">
                <img src={require("../images/play.png")}></img>
            </div>
            <Typography variant='h6' fontWeight="bold" color="white">YouClone</Typography>
        </Link>
        <SearchBar />
    </Stack>
  )
}

export default Nav