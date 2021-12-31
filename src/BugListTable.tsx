import { IBug } from "./IBug";


const BugListTable = (props:{bugs: IBug[], onDeleteBug: Function}) =>{
    const {bugs,onDeleteBug} = props;

    const resolvedPress = (id: string) => {
        onDeleteBug(id);
    };


    return<table>
        <thead>
        <tr>
            <th>Description</th>
            <th>Priority</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            {bugs.length === 0 && <tr><td>No bugs found </td></tr>}
            {bugs.length > 0 && bugs.map(bug => <tr key = {bug.id}>
                <td>{bug.description}</td>
                <td>{bug.priority}</td>
                <td><button onClick={() => resolvedPress(bug.id)}> Resolved</button></td>
                
            </tr>)}
        </tbody>


    </table>
};


export default BugListTable;