import userData from '../db.json';
import './table.css'
userData=userData.users;

export const TableData=()=>{
    const tableHeader=["userName","age","address","department","salary","gender","file",""];
    return <>
        <h1>user data</h1>
        <div className='app-container'>
        <table>
            <thead>
                <tr>
                    {tableHeader.map((tcol)=>(
                        <th>{tcol}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {userData.map((data)=>(
                    <tr>
                        <td>{data.userName}</td>
                        <td>{data.age}</td>
                        <td>{data.address}</td>
                        <td>{data.department}</td>
                        <td>{data.salary}</td>
                        <td>{data.gender}</td>
                        <td>{data.file}</td>
                        <td><button>Delete data</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </>
}