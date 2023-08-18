import React, { Component } from 'react'

export default class NavItem extends Component {
  

  render() {
    let {title, description, imgUrl, url} = this.props;
    return (
      <div>
        <div className="card m-5" style={{width: "18rem"}}>
  <img src={!imgUrl?"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7rorJWdqPfKZsuqJs8Nx9gHaFj%26pid%3DApi&f=1&ipt=096a3e98dbe1194c6d0d9bd32339cd5b18d5a8083e030c1601579857be26fa57&ipo=images": imgUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} target='_blank' rel='noreffer' className="btn btn-primary">Read</a>
  </div>
</div>
      </div>
    )
  }
}
