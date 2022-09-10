import React from 'react'
import { Stack, Box } from "@mui/material"
import VideoContainer from './VideoContainer'
import ChannelContainer from './ChannelContainer'

const Videos = ( { videos }) => {

  return (
    <Stack direction="row" justifyContent="flex-start" flexWrap="wrap" gap={2}>
        {videos?.map((item, index) => (
            <Box key={index} display="flex" flexDirection="column">
                {item.id.videoId && <VideoContainer video={item}/>}
                {item.id.channelId && <ChannelContainer channelDetails={item}/>}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos