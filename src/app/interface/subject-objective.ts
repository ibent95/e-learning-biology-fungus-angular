export interface SubjectObjective {
    name: string;
    expandable: boolean;
    isExpand: boolean;
    children?: SubjectObjective[];
}