import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Stack, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { fetchFromAPI } from '../tools/fetchAPI'
import Videos from "./Videos";

const VideoContents = () => {
  const { id } = useParams();
  const [videoContent, setVideoContent] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoContent(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id])

  if (!videoContent) return "Content Loading"
  
  return (
    <Box minHeight="90vh">
      <Stack direction="column">
        <Box flex={1}>
          <div className="player-wrapper">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width="100%" height="100%" className="react-player" controls />
          </div>
          <Typography px={2} fontSize={18} color="white">{videoContent?.snippet?.title}</Typography>
          <Typography px={2} fontSize={14} color="gray">{parseInt(videoContent?.statistics?.viewCount).toLocaleString()} views
             {" "} - {" "} {parseInt(videoContent?.statistics?.likeCount).toLocaleString()} likes </Typography>
          <Link to={`/channel/${videoContent?.snippet?.channelId}`}>
                <Typography px={2} color="white" >
                  {videoContent?.snippet?.channelTitle}
                  <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
          </Link>
        </Box>
        <Typography variant='h6' color="white" px={2} mt={5}>Related Videos</Typography>
        <Box px={2} py={2} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoContents