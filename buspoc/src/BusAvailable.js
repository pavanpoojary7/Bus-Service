import React  from "react";
import Button from '@mui/material/Button';
import info from "./List";

export const BusAvailable=()=>{
    return(
        <> 
            {/* bus tickets table */}
            <div className="row justify-content-center mt-2">
                <div className="col-lg-8 col-md-10 col-sm-12 table-responsive">
                    <table className="table table-stripped  shadow  text-white bg-black">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>BusNo</th>
                                <th>Source</th>
                                <th>Destination</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {info.map((data,index)=>(
                                <tr>
                                    <td>{data.Id}</td>
                                    <td>{data.busNo}</td>
                                    <td>{data.source}</td>
                                    <td>{data.destination}</td>
                                    <td>
                                        <Button color="warning" className="btn btn-outline-warning">
                                            Book
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

