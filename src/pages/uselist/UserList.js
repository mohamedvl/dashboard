import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import {rows} from "../../dummyData"
import { Link } from "react-router-dom";
import "./UserList.css";

const UserList = () => {
    const [data,setData]=useState(rows)
    const handleDelete=(id)=>{
        setData(data.filter((e)=>e.id!==id))
    }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "user", headerName: "User", width: 200,renderCell:(params)=>{
        return(
            <div className="userListUser">
            <img src={params.row.avatar} alt="" className="userListImg"/>
            {params.row.username}
            </div>
        )
    } },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell:(params)=>{
        return(
            <div>
            
            <Link to={"/user/" + params.row.id}>
            <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
            </div>
        )
      }
    },
  ];


  return (
    <div className="userList">
      <DataGrid
      
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
