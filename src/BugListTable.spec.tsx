import { render, fireEvent,screen } from "@testing-library/react";
import BugListTable from "./BugListTable";
import { BugPriority, IBug } from "./IBug";

test('the bug table should display a list of bugs', ()  => {
    const bugList: IBug[] =[
        {id: '1245', description: 'test bug', priority: BugPriority.LOW},
        {id: '1565', description: 'another test', priority: BugPriority.MEDIUM},
        {id: '1235', description: 'last test', priority: BugPriority.LOW}
    ];

    render(<BugListTable bugs={bugList} onDeleteBug={() => {}}/>)
    const rows = screen.getAllByRole('row');
    for(let index = 1; index< rows.length; index+=1){
        expect(rows[index]).toHaveTextContent(bugList[index-1].description);
    }
});



test('the resolved button shoudl remove the bug', () => {
    let bugList: IBug[] =[
        {id: '1245', description: 'test bug', priority: BugPriority.LOW},
        {id: '1565', description: 'another test', priority: BugPriority.MEDIUM},
        {id: '1235', description: 'last test', priority: BugPriority.LOW}
    ];
    const removeBug = (id:string) =>{
        bugList = bugList.filter(bug => bug.id !== id);
    }
    
    const {rerender} = render(<BugListTable bugs = {bugList} onDeleteBug={(id:string) => {removeBug(id)}}/>);

    fireEvent.click(screen.getAllByText('Resolved')[0]);
    rerender(<BugListTable bugs = {bugList} onDeleteBug={(id:string) => {removeBug(id)}}/>);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(3);
    
});