import React from 'react'
import Link from 'gatsby-link'

import BlockItem from '../components/block-item'

const BlockList = ({
  data
}) => (
  <div>
    <h1 className="page-title">List of blocks</h1>

    <ul className="block-list">
      {data.allBlocksYaml.edges.map((block, i)=>(
        <BlockItem
          key={i}
          block={block.node}
          />
      ))}
    </ul>

  </div>
)

export default BlockList

export const query = graphql`
  query BlockListQuery {
  	allBlocksYaml {
  	  edges {
  	    node {
          name
          description
          preview
          jsx
          html
  	    }
  	  }
  	}
  }
`
