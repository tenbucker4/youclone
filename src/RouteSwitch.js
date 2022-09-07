import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Nav from "./components/Nav";
import Main from "./components/Main";
import VideoContents from "./components/VideoContents";
import ChannelContents from "./components/ChannelContents";
import SearchOutput from "./components/SearchOutput";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: "#0f0f0f" }}>
                <Nav />
                <Routes>
                    <Route exact path="/" element={<Main />}></Route>
                    <Route
                        path="/video/:id"
                        element={<VideoContents />}
                    ></Route>
                    <Route
                        path="/channel/:id"
                        element={<ChannelContents />}
                    ></Route>
                    <Route
                        path="/search/:searchQuery"
                        element={<SearchOutput />}
                    ></Route>
                </Routes>
            </Box>
        </BrowserRouter>
    );
};

export default RouteSwitch;
