import React from 'react'
import { Link } from 'react-router-dom'
import {
  CollectionIcon,
  BookOpenIcon,
  CubeIcon,
  LocationMarkerIcon
} from '@heroicons/react/outline'
import PageHeading from '@/components/ui/PageHeading'

function PageCardLink({ title, url, icon }) {
  return (
    <Link
      className="flex flex-col w-48 p-4 place-items-center bg-neutral rounded-box hover:text-primary"
      to={url}
    >
      {React.createElement(icon, {
        className: 'h-36 w-36',
        'aria-hidden': 'true',
      })}

      <h3 className="text-lg font-bold">{title} </h3>
    </Link>
  )
}

function Home() {
  const data = [
    {
      title: 'Category',
      url: '/category',
      icon: CollectionIcon,
    },
    {
      title: 'Distributor',
      url: '/distributor',
      icon: CubeIcon,
    },
    {
      title: 'Location',
      url: '/location',
      icon: LocationMarkerIcon,
    },
  ]

  const pageCards = data.map((item, index) => (
    <PageCardLink
      key={index}
      title={item.title}
      url={item.url}
      icon={item.icon}
    />
  ))
  return (
    <div>
      <PageHeading title="Home" />
      <h2 className="mt-8 text-lg font-semibold text-primary">
        This web app tracks goods distribution details around the Madison area. Due to COVID implications on households, the state has provided funding to organizations for distributing food, clothes, and other supplies.
      </h2>

      <div style={{ paddingTop: '45px' }}>Browse distributors by:</div>
      <div className="grid max-w-screen-md grid-cols-1 gap-4 mt-8 justify-items-center md:grid-cols-3 md:justify-items-start">
        {pageCards}
      </div>
    </div>
  )
}

export default Home
