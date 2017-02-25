import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import './app.css';


class Menu extends React.Component
{

  render()
  {
    let menus = ['Home', 'About', 'Services', 'Products','Contact Us'];
      return(
        <div>
        {menus.map((v, i) => {
          return <div key={i}><Link label={v}/></div>
        })}
        </div>
      )
  }
}

class Link extends React.Component
{
    render()
    {
      const url = '/'+this.props.label.toLowerCase().trim().replace(' ','-')
      return(
        <div>
          <a href={url}>
          {this.props.label}
          </a>
        </div>
      )
    }  
}


render(
  <Menu />,
  document.getElementById('app')
)