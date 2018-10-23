import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

export const showSummeryPanel = 'showSummeryPanel';
export const showPanelTwo = 'showPanelTwo';
export const showLookupPanel = 'showLookupPanel';

@Injectable()
export class ModelCom {


    public static HIDE_SUMMERY_PANEL_HIDE_PANEL_TWO_SHOW_LOOKUP_PANEL = {
        'showLookupPanel': true
    };



    constructor(private modalService: NgbModal) {
        alert('gsdgshgshfg');
     }
}
