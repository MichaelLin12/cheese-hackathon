import React from 'react'
import { BookOpenIcon, LocationMarkerIcon } from '@heroicons/react/solid'

import EmptyState from '@/components/ui/EmptyState'
import BookCard from './Card'
import GoogleMapReact from 'google-map-react';


const LocationComponent = ({ text }) =>       <div> {React.createElement(LocationMarkerIcon, {
        className: 'h-12 w-12',
        'aria-hidden': 'true',
      })}
      </div>
      ;

const defaultProps = {
   center: {lat: 43.07335025987105, lng: -89.40334151276873},
   zoom: 15
}

function BookList({ data }) {
  if (!data || data.length == 0) {
    return (
      <EmptyState
        icon={LocationMarkerIcon}
        title="No locations"
        message="Start by adding a new location"
        btnLabel="Add Location"
        link="/book/create"
      />
    )
  }
  const cards = data.map((book, index) => <BookCard book={book} key={index} />)

  return (<React.Fragment>
    {/* <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-y-4">
      {cards}

    </div> */}

      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBZ2sAp0HWTfID8jHoCF6EhzHlGs4hqPWY' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <LocationComponent
            lat={43.075109299973825}
            lng={-89.40253733215484}
          />

          <LocationComponent
            lat={43.07120151581153}
            lng={-89.40684531363341}
          />


          <LocationComponent
            lat={43.0709465813515}
            lng={-89.39765543223336}
          />


          <LocationComponent
            lat={43.07716667945091}
            lng={-89.40107546404555}
          />
        </GoogleMapReact>
      </div>

  </React.Fragment>)
}

export default BookList
