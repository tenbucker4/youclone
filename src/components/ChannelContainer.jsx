import React from 'react'
import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from '../tools/tools'

const ChannelContainer = ({ channelDetails }) => {
  return (
    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: {md: "300px", sm:"300px", xs: "100%" },
      height: '326px',
    }}
  >
    <Link to={`/channel/${channelDetails?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        <CardMedia
          image={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetails?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant="h6">
          {channelDetails?.snippet?.title}
          <CheckCircle sx={{ fontSize: '14px', color: "gray", pl: '5px' }} />
        </Typography>
        {channelDetails?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
  )
}

export default ChannelContainer