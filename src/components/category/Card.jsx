import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StorageService from '@/services/StorageService'
import './Names.css'

function CategoryCard({ category }) {
  const [imageLink, setImageLink] = useState()

  useEffect(async () => {
    const url = await StorageService.getImageURL(category.cover)
    setImageLink(url)
  }, [category])

  return (
    <div style={{paddingTop:"60px"}}>
      <span className="centered">{category.name}</span>
      <Link to={`/category/edit/${category.id}`}>
        <img src={imageLink} alt={category.name} style={{objectFit: 'cover', width: '100%', height: '100%' }}  />
      </Link>
    </div>
  )
}

export default CategoryCard
