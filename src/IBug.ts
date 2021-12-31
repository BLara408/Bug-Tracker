export interface IBug{
    id: string;
    description: string;
    priority: string;

}

export enum BugPriority{
    LOW = 'Low',
    MEDIUM = 'Medium',
    HIGH = 'High',

}