import { Component, Prop, h } from "@stencil/core";

@Component({
  tag:'page-header',
  styleUrl:'page-header.component.css',
  shadow: true
})

export class PageHeaderComponent{
  @Prop() title: string;
  @Prop() buttonData: any;
  @Prop() linkData: any;

  render(){
    let displayElement;
    if(this.buttonData){
      displayElement = (
        <div class="page-header">
          <div class="header-text">
            <h1><span class="line"></span>{this.title}</h1>
          </div>
          <div class="action-item">
            <button-component data='{"name":"Save","className":"danger"}'></button-component>
          </div>
        </div>
      )
    }else if(this.linkData){
      displayElement = (
         <div class="page-header">
          <div class="header-text">
            <h1><span class="line"></span>{this.title}</h1>
          </div>
          <div class="action-item">
            <a href="#">{this.linkData.text}</a>
          </div>
        </div>
      )
    }else{
      displayElement = (
        <div class="page-header">
            <div class="header-text">
              <h1><span class="line"></span>{this.title}</h1>
            </div>
        </div>
      )
    }
    return displayElement;
  }
}
