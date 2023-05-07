import { MatNodeCustom } from "../interface/mat-node-custom";

export class SubjectMainObjectiveNode implements MatNodeCustom {
    name?: string;
    // expandable?: boolean = true;
    // isExpanded?: boolean = false;
    children?: SubjectMainObjectiveNode[];
}
