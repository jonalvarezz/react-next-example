import React, { useContext } from 'react'
import styled from 'styled-components'
import Card from './Card'
import User from './User'
import Group from './Group'

import { Context } from '../../store'

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
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  background-color: #fff;
  color: #444;
`

function Grid() {
  const store = useContext(Context)
  const collection = store[store.current]
  const Component = store.current === 'users' ? User : Group

  return (
    <Wrapper>
      <List>
        {collection.map(data => (
          <Card key={data.id}>
            <Component {...data} />
          </Card>
        ))}
      </List>
    </Wrapper>
  )
}

export default Grid
