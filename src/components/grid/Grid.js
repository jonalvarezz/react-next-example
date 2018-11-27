import React, { useContext } from 'react'
import styled from 'styled-components'
import Card from './Card'
import User from './User'
import Group from './Group'

import { Context, actions } from '../../store'

const Wrapper = styled.section`
  width: 90%;
  margin: 1.5rem auto;
  max-width: 1000px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  background-color: #fff;
  color: #444;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

function Grid() {
  const { dispatch, activeItem, ...store } = useContext(Context)
  const collection = store[store.current]
  const Component = store.current === 'users' ? User : Group

  return (
    <Wrapper>
      <List>
        {collection.map(data => (
          <Card
            key={data.id}
            onClick={() => dispatch(actions.setActiveItem(data.id))}
            active={data.id === activeItem}
          >
            <Component {...data} />
          </Card>
        ))}
      </List>
    </Wrapper>
  )
}

export default Grid
