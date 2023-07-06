import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';

function SidebarS() {
  return (
    <div className='flex flex-col space-y-4 text-white cursor-pointer w-5 h-5'>
        <MenuOutlinedIcon className='mt-8' />
        <HomeOutlinedIcon />
        <ExploreOutlinedIcon />
        <SubscriptionsOutlinedIcon/>
        < VideoLibraryOutlinedIcon />
        <HistoryOutlinedIcon />
    </div>
  )
}

export default SidebarS