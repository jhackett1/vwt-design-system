import React from 'react'
import * as Fa from 'react-icons/lib/fa'

export default class BlockItem extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      jsxOpen: true,
      htmlOpen: false,
      previewOpen: false
    }
  }

  toggleJsx(){
    this.setState({
      jsxOpen: !this.state.jsxOpen
    })
  }
  toggleHtml(){
    this.setState({
      htmlOpen: !this.state.htmlOpen
    })
  }
  togglePreview(){
    this.setState({
      previewOpen: !this.state.previewOpen
    })
  }

  render(){
    return(
      <li className="block-list-item" key={this.props.key}>
        <h2>{this.props.block.name}</h2>
        <p>{this.props.block.description}</p>

        {(!this.state.previewOpen)?
          <small onClick={this.togglePreview.bind(this)}>Show preview <Fa.FaAngleRight/></small>
        :
          <small onClick={this.togglePreview.bind(this)}>Hide preview <Fa.FaAngleDown/></small>
        }
        {(this.state.previewOpen)? <img src={this.props.block.preview}/> : ""}


        {(!this.state.jsxOpen)?
          <small onClick={this.toggleJsx.bind(this)}>Show JSX <Fa.FaAngleRight/></small>
        :
          <small onClick={this.toggleJsx.bind(this)}>Hide JSX <Fa.FaAngleDown/></small>
        }
        {(this.state.jsxOpen)? <pre><code>{this.props.block.jsx}</code></pre> : ""}

        {(!this.state.htmlOpen)?
          <small onClick={this.toggleHtml.bind(this)}>Show example HTML <Fa.FaAngleRight/></small>
        :
          <small onClick={this.toggleHtml.bind(this)}>Hide example HTML <Fa.FaAngleDown/></small>
        }
        {(this.state.htmlOpen)? <pre><code>{this.props.block.html}</code></pre> : ""}
      </li>
    )
  }
}
