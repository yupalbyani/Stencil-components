import { Component, Prop, h , Event, EventEmitter} from "@stencil/core";


@Component({
  tag:'button-component',
  styleUrl: 'button.component.css',
  scoped: true
})
export class Button {
  @Prop() data: any;
  @Event({ bubbles: true }) onBtnClick : EventEmitter<string>
  buttonClick(){
    this.onBtnClick.emit('true')
  }

  componentWillLoad(){
    if(typeof this.data === 'string'){
      this.data = JSON.parse(this.data)
    }
  }

  render(){
    return(
      <span>
        <button class={this.data.className} onClick={this.buttonClick.bind(this)}>{this.data.name}</button>
      </span>
    )
  }
}
