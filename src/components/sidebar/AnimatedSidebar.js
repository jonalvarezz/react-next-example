import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const CloseBtn = styled.button`
  position: absolute;
  right: 0.6rem;
  top: 1rem;
  background: #eee;
  color: #333;
  font-family: Arial;
  border: none;
  font-weight: lighter;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
  font-size: 1rem

  &:after {
    content: 'X';
  }
`

const Wrapper = styled.aside`
  position: absolute;
  top: 0;
  padding: 3rem 2rem 2rem;
  bottom: 0;
  width: 60%;
  right: 0;
  background: white;
  box-shadow: -4px 2px 16px rgba(0, 0, 0, 0.3);
`

const allFixed = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
}

const propTypes = {
  value: PropTypes.string,
  children: PropTypes.element,
  onClose: PropTypes.func
}

function AnimatedSidebar({ show, children, onClose }) {
  const value = show ? '0' : '100%'
  const backdropRef = useRef(null)
  const [move] = useSpring({
    ...allFixed,
    config: { delay: 0, tension: 0 },
    background: 'transparent',
    transform: `translateX(${value}%)`,
    from: { transform: 'translateX(100%)' }
  })
  const [move2] = useSpring({
    ...allFixed,
    config: { delay: 300, tesion: 100 },
    background: 'transparent',
    transform: `translateX(${value}%)`,
    from: { transform: 'translateX(100%)' }
  })
  const [fadeIn] = useSpring({
    ...allFixed,
    background: 'rgba(0,0,0,.4',
    opacity: show ? 1 : 0,
    config: { delay: 100, tesion: 300 },
    from: { opacity: 0 }
  })

  const onClick = ({ target }) => target === backdropRef.current && onClose()

  return (
    <animated.div style={move}>
      <animated.div style={fadeIn} />
      <animated.div style={move2} onClick={onClick} ref={backdropRef}>
        <Wrapper>
          {show && children}
          <CloseBtn onClick={onClose} />
        </Wrapper>
      </animated.div>
    </animated.div>
  )
}
AnimatedSidebar.propTypes = propTypes

export default AnimatedSidebar
