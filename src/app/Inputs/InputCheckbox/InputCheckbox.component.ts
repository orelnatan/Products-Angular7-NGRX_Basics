import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'input-checkbox',
  templateUrl: './InputCheckbox.component.html',
  styleUrls: ['./InputCheckbox.component.scss', '../inputs.styles.scss'],
})

export class InputCheckbox {
    @Input() id: string;
    @Input() title: string;
    @Input() validation: string;
    @Input() checked: boolean;
    @Input() submitted: boolean;
    @Input() invalid: boolean;

    @Output() onChange: EventEmitter<any> = new EventEmitter();

}

// v
