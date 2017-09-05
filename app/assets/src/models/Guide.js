import { observable, computed, action } from "mobx";
import Step from './Step'

export default class Conversation {
  @observable steps = [
    {key: "choose", title:"Choose your property", text:"21 Cotham Lawn Road, Bristol", status:"complete"},
    {key: "offer", title:"Make an offer", text:"Not complete", status:"incomplete"},
    {key: "insure", title:"Insure property", text:"Not complete", status:"incomplete"},
    {key: "mortgage", title:"Instant mortgage", text:"Not complete", status:"incomplete"},
    {key: "accept", title:"Offer acceptance", text:"Not complete", status:"incomplete"},
    {key: "move", title:"Move in", text:"Not complete", status:"incomplete"}
  ];

  @action
  addStep(key, title, text, status) {
    this.messages.push(new Step(key, title, text, status));
  }

  @action
  updateStep(key, title, text, status) {
  }
}