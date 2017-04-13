import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'event-thumbnail',
  template: `<div class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>{{event.date}}</div>
    <div>{{event.time}}</div>
    <div>\${{event.price}}</div>
    <div>
      <span>Location: {{event.location.address}}</span>

      <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
    </div>
  </div>
`,
styles: [`
  .thumbnail {min-height: 210px;}  
  .pad-left{margin-left:10px;}
  .well div {color: #bbb;}
  `]
})

export class EventThumbnailComponent{
  @Input() event:any
  someProperty:any = "some value"
  logFoo(){
    console.log('foo')
  }
}
