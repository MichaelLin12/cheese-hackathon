import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="py-4 text-center bg-neutral">
      <small text="xs light-900" font="light" tracking="wider">
        &copy; {currentYear} Goods Distribution   |   With 💛 Michael, Adithya, Safi, Daniel
      </small>
    </footer>
  )
}

export default Footer
