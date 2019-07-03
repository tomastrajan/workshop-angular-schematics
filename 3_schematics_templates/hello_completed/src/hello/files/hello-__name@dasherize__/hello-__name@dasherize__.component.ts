import { Component } from '@angular/core';

@Component({
    selector: 'hello-<%= dasherize(name) %>',
    template: `<h1><%= greeting %> {{name}}</h1>`
})
export class Hello<%= classify(name) %>Component {
    name = '<%= addExclamation(name) %>'
}
