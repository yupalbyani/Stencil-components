import { Component, Prop, h } from "@stencil/core";


@Component({
  tag:'card-header-component',
  styleUrl: 'card-header.component.css',
  shadow: true
})
export class CardHeader {
  @Prop() headingTitle: string | 'Add Heading';
  @Prop() headingTitleTag : string | 'h1'
  @Prop() headingType: string | 'primary'



  componentWillLoad(){

  }

  render(){
    let tag = 'h1';
    let classNaming: string = "heading";

    switch(this.headingType){
      case 'primary':
        classNaming+= ' primary'
        break;
      default:
        classNaming+= ' primary'
    }

    switch(this.headingTitleTag){
       case 'h1' :
        tag = (
          <div class={classNaming}>
            <h1>{this.headingTitle}</h1>
          </div>
        );
        break
        case 'h2' :
          tag = (
            <div class={classNaming}>
              <h2>{this.headingTitle}</h2>
            </div>
          );
        break
        case 'h3' :
          tag = (
            <div class={classNaming}>
              <h3 class="primary">{this.headingTitle}</h3>
            </div>
          );
          break
        case 'h4' :
          tag = (
            <div class={classNaming}>
              <h4>{this.headingTitle}</h4>
            </div>
          );
          break
        case 'h5' :
          tag = (
            <div class={classNaming}>
              <h5>{this.headingTitle}</h5>
            </div>
          );
          break
        case 'h6' :
          tag = (
            <div class={classNaming}>
              <h6>{this.headingTitle}</h6>
            </div>
          );
        break
        default:
          tag = (
            <div class={classNaming}>
              <h1>{this.headingTitle}</h1>
            </div>
          );

    }

    return tag;
  }
}
