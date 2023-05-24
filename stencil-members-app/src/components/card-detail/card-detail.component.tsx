import { Component, Prop, h } from "@stencil/core";

@Component({
    tag:'card-details-component',
    styleUrl:'card-detail.component.css',
    shadow: true
})

export class CardDetailComponent{
    @Prop() detailsData: any;
    componentWillLoad(){
        console.log('....',typeof this.detailsData)
        if(typeof this.detailsData === 'string'){
            this.detailsData = JSON.parse(this.detailsData);
        }
    }

    render(){
        return (
                <div class="card-details">
                    <card-header-component heading-title={this.detailsData?.header.headingTitle} heading-title-tag={this.detailsData?.header.headingTitleTag} heading-type={this.detailsData?.header.headingType}></card-header-component>
                    <div class="card-detail">
                        <div class="card-details-footer">
                            <div class="btn-group">
                                {this.detailsData?.buttons.map((item)=>{
                                    return (<button-component data={item}></button-component>)
                                })}
                            </div>
                            <a href="#">{this.detailsData.linkTo}</a>
                        </div>
                    </div>

                </div>
          );
    }
}
