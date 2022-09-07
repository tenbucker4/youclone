import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../tools/tools'


const SideBar = ( { selectedCategory, setSelectedCategory }) => {
  return (
    <Stack direction="row" py={2} px={1} gap={2} sx={{
        flexDirection: {md: "column" },
        overflowY: "auto",
        height: {sx: "auto", md: "95%"},
        }}>
            {categories.map((category) => (
                <button onClick={() => setSelectedCategory(category.name)} className="category-btn"
                 key={category.name} style={{ background: category.name === selectedCategory && "red", color: "white"}}>
                    <span style={{ opacity: category.name === selectedCategory && "100%" }}>{category.icon}</span>
                    <span style={{ opacity: category.name === selectedCategory && "100%" }}>{category.name}</span>
                </button>
            ))}
    </Stack>
  )
}

export default SideBar